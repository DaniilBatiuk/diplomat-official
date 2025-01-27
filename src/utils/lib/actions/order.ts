'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

import { TOKENS } from '@/utils/config/enum-tokens'

import { getUserSession } from '@/utils/helpers/get-user-session'
import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { orderScheme } from '@/utils/validators/order-validator'

export const createOrder = validatedAction(orderScheme, async order => {
  const cookieStore = await cookies()
  const token = cookieStore.get(TOKENS.CART_TOKEN)?.value
  const user = await getUserSession()

  if (!token) {
    return {
      errors: { message: 'Корзина не знайдена' },
      inputs: {},
      success: false,
    }
  }

  const cart = await prisma.cart.findFirst({
    include: {
      user: true,
      items: {
        include: {
          product: true,
        },
      },
    },
    where: {
      token,
    },
  })

  if (!cart) {
    return {
      errors: { message: 'Корзина не знайдена' },
      inputs: {},
      success: false,
    }
  }

  if (cart.items.length === 0) {
    return {
      errors: { message: 'Корзина порожня' },
      inputs: {},
      success: false,
    }
  }

  await prisma.order.create({
    data: {
      ...order,
      cartSnapshot: JSON.stringify({ items: cart.items, totalPrice: cart.totalPrice }),
      userId: user ? user.id : null,
    },
  })

  // delete data from cart
  await prisma.cart.update({
    where: {
      id: cart.id,
    },
    data: {
      totalPrice: 0,
    },
  })

  await prisma.cartItem.deleteMany({
    where: {
      cartId: cart.id,
    },
  })

  if (user) {
    revalidateTag(`user-${user?.id}`)
  }
  return {
    errors: {},
    inputs: order,
    success: true,
  }
})
