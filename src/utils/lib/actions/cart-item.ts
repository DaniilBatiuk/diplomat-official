'use server'

import { cookies } from 'next/headers'

import { TOKENS } from '@/utils/constants'

import { prisma } from '../db'

import { findOrCreateCart, updateCartTotalAmount } from './cart'
import { errorCatch } from '@/utils/helpers'

export const checkCartItemExists = async (id: string) => {
  const cartItem = await prisma.cartItem.findFirst({
    where: {
      id: id,
    },
  })

  if (!cartItem) {
    throw new Error('Товару у кошику не існує')
  }

  return cartItem
}

export const createCartItem = errorCatch(async (productId: string) => {
  const cookieStore = await cookies()
  let token = cookieStore.get(TOKENS.CART_TOKEN)?.value

  if (!token) {
    token = crypto.randomUUID()
  }

  const cart = await findOrCreateCart(token)

  const findCartItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  })

  if (findCartItem) {
    throw new Error('Товар вже є в кошику')
  }

  await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
    },
  })

  cookieStore.set(TOKENS.CART_TOKEN, token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })

  await updateCartTotalAmount()
})

export const deleteCartItem = async (id: string) => {
  await checkCartItemExists(id)

  await prisma.cartItem.delete({
    where: {
      id: id,
    },
  })

  await updateCartTotalAmount()
}

export const updateCartItem = async ({ id, quantity }: { id: string; quantity: number }) => {
  await checkCartItemExists(id)

  await prisma.cartItem.update({
    where: {
      id,
    },
    data: {
      quantity,
    },
  })

  await updateCartTotalAmount()
}
