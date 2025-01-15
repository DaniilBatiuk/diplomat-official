'use server'

import { revalidateTag } from 'next/cache'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { subCategoryScheme } from '@/utils/validators/subcategory-validator'

export const createSubcategory = validatedAction(subCategoryScheme, async data => {
  const isSubcategoryExists = await prisma.subcategory.findFirst({
    where: {
      ...data,
    },
  })

  if (isSubcategoryExists) {
    return {
      success: false,
      errors: { name: 'Підкатегорія з такою назвою вже існує у цій категорії' },
      inputs: data,
    }
  }

  await prisma.subcategory.create({
    data: {
      ...data,
    },
  })

  revalidateTag('all-categories')

  return {
    errors: {},
    inputs: {},
    success: true,
  }
})
