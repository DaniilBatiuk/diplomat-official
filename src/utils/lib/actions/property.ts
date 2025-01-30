'use server'

import { prisma } from '@/utils/lib/db'

export const createProperty = async (property: IPropertyCreate) => {
  await prisma.property.create({
    data: {
      ...property,
    },
  })
}

export const deleteAllProperties = async (productId: string) => {
  await prisma.property.deleteMany({
    where: {
      productId: productId,
    },
  })
}
