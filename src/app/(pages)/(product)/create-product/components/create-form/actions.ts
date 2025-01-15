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

export async function updateProduct(product: IProductCreate, id: string) {
  const { properties: productProperties, ...productUpdateData } = product
  const updatedProduct = await prisma.product.update({
    where: {
      id,
    },
    data: {
      ...productUpdateData,
    },
  })

  await deleteAllProperties(updatedProduct.id)

  const properties = product.properties.map(prop => {
    return { ...prop, productId: updatedProduct.id, subcategoryId: product.subcategoryId }
  })

  for (let property of properties) {
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

export async function deleteAllProperties(productId: string) {
  await prisma.property.deleteMany({
    where: {
      productId: productId,
    },
  })
}
