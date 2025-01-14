'use server'

import { $Enums } from '@prisma/client'

import { prisma } from '@/utils/lib/db'

export async function createProduct(product: IProductCreate) {
  const newProduct = await prisma.product.create({
    data: {
      name: product.name,
      description: product.description,
      price: +product.price,
      count: +product.count,
      discountPercent: product.discountPercent ?? null,
      imageUrls: product.imageUrls,
      status: $Enums.Status.inactive,
      subcategoryId: product.subcategoryId,
    },
  })

  const properties = product.properties.map(prop => {
    return { ...prop, productId: newProduct.id, subcategoryId: product.subcategoryId }
  })

  for (const property of properties) {
    await createProperty(property)
  }

  return { newProduct }
}

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
