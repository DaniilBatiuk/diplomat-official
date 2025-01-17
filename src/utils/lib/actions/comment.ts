'use server'

import { revalidateTag } from 'next/cache'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { commentScheme } from '@/utils/validators/comment-alidator'

export const createComment = validatedAction(commentScheme, async comment => {
  await prisma.comment.create({
    data: {
      ...comment,
      starCount: +comment.starCount,
      recommend: comment.recommend === 'true' ? true : false,
    },
  })

  revalidateTag(`product-${comment.productId}`)

  return {
    errors: {},
    inputs: {},
    success: true,
  }
})
