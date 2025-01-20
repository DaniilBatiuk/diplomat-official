'use server'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { orderScheme } from '@/utils/validators/order-validator'

export const createOrder = validatedAction(orderScheme, async order => {
  await prisma.order.create({
    data: {
      ...order,
      cartSnapshot: JSON.stringify(order),
      token: '1234124234234',
    },
  })

  return {
    errors: {},
    inputs: {},
    success: true,
  }
})
