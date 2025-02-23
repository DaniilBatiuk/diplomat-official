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
        where: { id },
        include: {
          properties: true,
          comments: { include: { user: true }, orderBy: { createdAt: 'desc' } },
        },
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

export const getActiveProductsByCategory = (
  categoryName: string,
): Promise<IProductWithProperties[]> => {
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
        include: { properties: true },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })) as IProductWithProperties[],
    [`products-by-category-${categoryName}`],
    {
      revalidate: 60 * 60 * 2, // two hours,
    },
  )()
}

export const getActiveProductsBySubcategory = (
  subCategoryName: string,
): Promise<IProductWithProperties[]> => {
  return unstable_cache(
    async () =>
      (await prisma.product.findMany({
        where: {
          status: $Enums.Status.active,
          subcategory: {
            name: subCategoryName,
          },
        },
        include: { properties: true },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })) as IProductWithProperties[],
    [`products-by-subcategory-${subCategoryName}`],
    {
      revalidate: 60 * 60 * 2, // two hours,
    },
  )()
}

export const getUserDetails = (id: string): Promise<IUserDetails> => {
  return unstable_cache(
    async () =>
      (await prisma.user.findUnique({
        where: { id },
        include: {
          orders: {
            select: { id: true, cartSnapshot: true, createdAt: true },
            orderBy: { createdAt: 'desc' },
          },
          _count: {
            select: { comments: true },
          },
        },
      })) as IUserDetails,
    [`user-${id}`],
    {
      tags: [`user-${id}`],
      revalidate: 60 * 60 * 2, // two hours,
    },
  )()
}
