'use server'

import { $Enums } from '@prisma/client'
import { revalidateTag } from 'next/cache'

import { prisma } from '@/utils/lib/db'

export async function createProduct(product: IProductCreate) {
  const { properties: productProperties, ...productCreateData } = product
  const newProduct = await prisma.product.create({
    data: {
      ...productCreateData,
      status: $Enums.Status.inactive,
    },
  })

  const properties = productProperties.map(prop => {
    return { ...prop, productId: newProduct.id, subcategoryId: product.subcategoryId }
  })

  for (const property of properties) {
    await createProperty(property)
  }

  revalidateTag('products')
}

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
