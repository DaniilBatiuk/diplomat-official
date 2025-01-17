import { $Enums } from '@prisma/client'

import { prisma } from './db'
import { unstable_cache } from './unstable_cache'

export const getProducts = unstable_cache(
  () =>
    prisma.product.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      include: { properties: true, comments: { include: { user: true } } },
    }),
  ['products'],
  {
    tags: ['products'],
    revalidate: 60 * 60 * 2, // two hours,
  },
)

export const getActiveProducts = unstable_cache(
  () =>
    prisma.product.findMany({
      where: {
        status: $Enums.Status.active,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      include: { properties: true, comments: { include: { user: true } } },
    }),
  ['active-products'],
  {
    tags: ['active-products'],
    revalidate: 60 * 60 * 2, // two hours,
  },
)

export const getProductDetails = (id: string): Promise<IProductOne> => {
  return unstable_cache(
    async () =>
      (await prisma.product.findUnique({
        where: { id: id },
        include: { properties: true, comments: { include: { user: true } } },
      })) as IProductOne,
    [`product-${id}`],
    {
      tags: [`product-${id}`],
      revalidate: 60 * 60 * 2,
    },
  )()
}

export const getProductsWithSameSubcategory = unstable_cache(
  (subcategoryId: string, notToIncludeIdProduct: string) =>
    prisma.product.findMany({
      where: { subcategoryId: subcategoryId, NOT: { id: notToIncludeIdProduct } },
    }),
  ['product-with-same-subcategory'],
  {
    revalidate: 60 * 60 * 2, // two hours,
  },
)

export const getCategories = unstable_cache(
  () =>
    prisma.category.findMany({
      include: {
        subcategories: {
          include: {
            products: { select: { id: true, name: true } },
            properties: { select: { id: true, name: true } },
          },
        },
      },
    }),
  ['all-categories'],

  {
    tags: ['all-categories'],
    revalidate: 60 * 60 * 2, // two hours,
  },
)

export const getActiveProductsByCategory = (categoryName: string): Promise<IProduct[]> => {
  return unstable_cache(
    async () =>
      (await prisma.product.findMany({
        where: {
          status: $Enums.Status.active,
          subcategory: {
            category: {
              name: categoryName,
            },
          },
        },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })) as IProduct[],
    [`products-by-category-${categoryName}`],
    {
      revalidate: 60 * 60 * 2,
    },
  )()
}

export const getActiveProductsBySubcategory = (subCategoryName: string): Promise<IProduct[]> => {
  return unstable_cache(
    async () =>
      (await prisma.product.findMany({
        where: {
          status: $Enums.Status.active,
          subcategory: {
            name: subCategoryName,
          },
        },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })) as IProduct[],
    [`products-by-subcategory-${subCategoryName}`],
    {
      revalidate: 60 * 60 * 2,
    },
  )()
}
