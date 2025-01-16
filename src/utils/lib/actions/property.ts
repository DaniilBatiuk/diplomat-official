'use server'

import { prisma } from '@/utils/lib/db'

export async function createProperty(property: IPropertyCreate) {
  const newProperty = await prisma.property.create({
    data: {
      ...property,
    },
  })

  return { newProperty }
}

export async function deleteAllProperties(productId: string) {
  await prisma.property.deleteMany({
    where: {
      productId: productId,
    },
  })
}
