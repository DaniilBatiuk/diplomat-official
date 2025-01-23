'use server'

import { revalidateTag } from 'next/cache'

import { getUserSession } from '@/utils/helpers/get-user-session'
import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { commentScheme } from '@/utils/validators/comment-validator'

export const createComment = validatedAction(commentScheme, async comment => {
  const user = await getUserSession()

  if (!user) {
    return {
      errors: { message: 'Для створення коментаря потрібно бути авторизованим' },
      inputs: {},
      success: false,
    }
  }

  await prisma.comment.create({
    data: {
      ...comment,
      userId: user.id,
    },
  })

  revalidateTag(`product-${comment.productId}`)

  return {
    errors: {},
    inputs: {},
    success: true,
  }
})
