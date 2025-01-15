'use server'

import { revalidateTag } from 'next/cache'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { subCategoryScheme } from '@/utils/validators/subcategory-validator'

export const createSubcategory = validatedAction(subCategoryScheme, async subcategory => {
  const name = subcategory.name.trim().charAt(0).toUpperCase() + subcategory.name.trim().slice(1)
  const isSubcategoryExists = await prisma.subcategory.findFirst({
    where: {
      ...subcategory,
      name,
    },
  })

  if (isSubcategoryExists) {
    return {
      success: false,
      errors: { name: 'Підкатегорія з такою назвою вже існує у цій категорії' },
      inputs: subcategory,
    }
  }

  await prisma.subcategory.create({
    data: {
      ...subcategory,
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
