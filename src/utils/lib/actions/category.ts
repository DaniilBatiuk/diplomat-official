'use server'

import { revalidateTag } from 'next/cache'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { categoryScheme } from '@/utils/validators/category-validator'

export const createCategory = validatedAction(categoryScheme, async category => {
  const name = category.name.trim().charAt(0).toUpperCase() + category.name.trim().slice(1)
  const isCategoryExists = await prisma.category.findUnique({
    where: {
      name,
    },
  })

  if (isCategoryExists) {
    return {
      success: false,
      errors: { name: 'Категорія з такою назвою вже існує' },
      inputs: category,
    }
  }

  await prisma.category.create({
    data: {
      name,
    },
  })

  revalidateTag('all-categories')

  return {
    errors: {},
    inputs: {},
    success: true,
  }
})
