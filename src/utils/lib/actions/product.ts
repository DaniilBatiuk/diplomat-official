'use server'

import { $Enums } from '@prisma/client'
import { revalidateTag } from 'next/cache'

import { createProperty, deleteAllProperties } from './property'
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
  const { properties: _, ...productUpdateData } = product
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

  for (const property of properties) {
    await createProperty(property)
  }

  revalidateTag(`product-${id}`)
  revalidateTag('products')
}

export async function deleteProduct(id: string) {
  const isProductExists = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!isProductExists) {
    throw new Error('Товара не існує')
  }

  await deleteAllProperties(id)

  await prisma.product.delete({
    where: {
      id,
    },
  })

  revalidateTag('products')
}

export async function changeProductStatus({ id, status }: { id: string; status: $Enums.Status }) {
  await prisma.product.update({
    where: {
      id,
    },
    data: {
      status,
    },
  })

  revalidateTag('products')
  revalidateTag('active-products')
}
