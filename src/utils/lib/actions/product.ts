'use server'

import { $Enums } from '@prisma/client'
import { revalidateTag } from 'next/cache'

import { createProperty, deleteAllProperties } from './property'
import { prisma } from '@/utils/lib/db'

export const createProduct = async (product: IProductCreate) => {
  const { properties: productProperties, ...productCreateData } = product
  const newProduct = await prisma.product.create({
    data: {
      ...productCreateData,
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

export const updateProduct = async (product: IProductCreate, id: string) => {
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

export const deleteProduct = async (id: string) => {
  const isProductExists = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!isProductExists) {
    throw new Error('Товара не існує')
  }

  await prisma.cartItem.deleteMany({
    where: {
      productId: id,
    },
  })

  await deleteAllProperties(id)

  await prisma.product.delete({
    where: {
      id,
    },
  })

  revalidateTag('products')
}

export const changeProductStatus = async ({
  id,
  status,
}: {
  id: string
  status: $Enums.Status
}) => {
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
