'use server'

import { prisma } from '@/utils/lib/db'

export async function createProperty(property: IPropertyCreate) {
  await prisma.property.create({
    data: {
      ...property,
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
