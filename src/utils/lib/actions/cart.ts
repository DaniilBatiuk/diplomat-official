'use server'

import { cookies } from 'next/headers'

import { prisma } from '../db'

export async function getCart(): Promise<ICartDto | undefined> {
  const cookieStore = await cookies()
  const token = cookieStore.get('cartToken')?.value

  if (!token) {
    return undefined
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

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
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
  }

  return cart
}

export const updateCartTotalAmount = async () => {
  const cart = await getCart()

  if (!cart) {
    throw new Error('Корзина не існує')
  }

  const totalPrice = cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
  }, 0)

  await prisma.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      totalPrice,
    },
  })
}
