import { prisma } from './db'
import { unstable_cache } from './unstable_cache'

export const getProducts = unstable_cache(
  () =>
    prisma.product.findMany({
      include: { properties: true, comments: { include: { user: true } } },
    }),
  ['products'],
  {
    tags: ['products'],
    revalidate: 60 * 60 * 2, // two hours,
  },
)

export const getProductDetails = unstable_cache(
  (id: string) =>
    prisma.product.findUnique({
      where: { id: id },
      include: { properties: true, comments: { include: { user: true } } },
    }),
  ['product'],
  {
    revalidate: 60 * 60 * 2, // two hours,
  },
)

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

export const getAllCategories = unstable_cache(
  () =>
    prisma.category.findMany({
      include: { subcategories: { include: { products: { select: { id: true, name: true } } } } },
    }),
  ['all-categories'],

  {
    tags: ['all-categories'],
    revalidate: 60 * 60 * 2, // two hours,
  },
)
