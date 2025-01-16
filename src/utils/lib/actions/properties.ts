'use server'

import { prisma } from '../db'

export async function createProperty(property: IPropertyCreate) {
  await prisma.property.create({
    data: {
      name: property.name,
      value: property.value,
      productId: property.productId,
      subcategoryId: property.subcategoryId,
    },
  })
}

export async function deleteAllProperties(productId: string) {
  await prisma.property.deleteMany({
    where: {
      productId: productId,
    },
  })
}
