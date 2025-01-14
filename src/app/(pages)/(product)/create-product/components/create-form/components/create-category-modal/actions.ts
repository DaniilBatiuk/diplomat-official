'use server'

import { revalidateTag } from 'next/cache'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { categoryScheme } from '@/utils/validators/category-validator'

export const createCategory = validatedAction(categoryScheme, async data => {
  const { name } = data

  const isCategoryExists = await prisma.category.findUnique({
    where: {
      name,
    },
  })

  if (isCategoryExists) {
    return { success: false, error: 'Категорія з такою назвою вже існує', inputs: data }
  }

  await prisma.category.create({
    data: {
      name,
    },
  })

  revalidateTag('all-categories')

  return {
    success: true,
  }
})
