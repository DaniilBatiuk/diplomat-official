'use server'

import { prisma } from '@/utils/lib/db'

export async function createProperty(property: IPropertyCreate) {
  const newProperty = await prisma.property.create({
    data: {
      name: property.name,
      value: property.value,
      productId: property.productId,
      subcategoryId: property.subcategoryId,
    },
  })

  return { newProperty }
}
