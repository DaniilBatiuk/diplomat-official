'use server'

import { validatedAction } from '../middleware'

import { createProperty } from './property'
import { prisma } from '@/utils/lib/db'
import { productScheme } from '@/utils/validators/product-validator'

export const createProduct = validatedAction(productScheme, async data => {
  const newProduct = await prisma.category.create({
    data: {
      ...data,
    },
  })

  const properties = data.properties.map(prop => {
    return { ...prop, productId: newProduct.id, subcategoryId: data.subcategoryId }
  })

  for (const property of properties) {
    await createProperty(property)
  }

  return {
    errors: {},
    inputs: {},
    success: true,
  }
})
