'use server'

import { cookies } from 'next/headers'

import { TOKENS } from '@/utils/config/enum-tokens'

import { prisma } from '../db'

import { calculateTotalPrice } from '@/utils/helpers'
import { getUserSession } from '@/utils/helpers/get-user-session'

export async function getCart(): Promise<ICartDto | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(TOKENS.CART_TOKEN)?.value

  if (!token) {
    return null
  }

  const cart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          product: true,
        },
      },
    },
  })
  if (!cart) {
    throw new Error('Корзина не знайдена')
  }

  return cart
}

export const findOrCreateCart = async (token: string): Promise<ICartDto> => {
  let cart = await getCart()
  const user = await getUserSession()

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        token,
        userId: user ? user.id : null,
      },
      include: {
        items: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            product: true,
          },
        },
      },
    })
  }

  return cart
}

export const updateCartTotalAmount = async () => {
  const cart = await getCart()

  if (!cart) {
    throw new Error('Корзина не існує')
  }

  const totalPrice = calculateTotalPrice(cart)

  await prisma.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      totalPrice,
    },
  })
}

export const setCartToken = async (providerId?: string) => {
  const user = await getUserSession()
  const cookieStore = await cookies()
  const token = cookieStore.get(TOKENS.CART_TOKEN)?.value
  let userId: undefined | string = undefined
  if (providerId) {
    const userFromProvider = await prisma.user.findFirst({
      where: {
        providerId,
      },
    })

    userId = userFromProvider?.id
  }
  userId = userId ?? user?.id
  if (!userId) {
    return
  }

  const cart = await prisma.cart.findFirst({
    where: {
      userId,
    },
  })

  // If user had a cart before and has token
  if (cart && token) {
    const cartFromToken = await prisma.cart.findFirst({
      where: {
        token,
      },
    })

    if (!cartFromToken) {
      return
    }

    await prisma.cartItem.deleteMany({
      where: {
        cartId: cartFromToken.id,
      },
    })

    await prisma.cart.deleteMany({
      where: {
        token,
      },
    })
  }

  if (!cart) {
    if (token) {
      const cartFromToken = await prisma.cart.findFirst({
        where: {
          token,
        },
      })

      if (!cartFromToken) {
        return
      }

      await prisma.cart.update({
        where: {
          id: cartFromToken.id,
        },
        data: {
          userId,
        },
      })
    }
    return
  }

  cookieStore.set(TOKENS.CART_TOKEN, cart.token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })
  return
}
