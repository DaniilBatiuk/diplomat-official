import prisma from './../../../prisma/prisma-middleware'
import { unstable_cache } from './unstable_cache'

export const getProducts = unstable_cache(
  () =>
    prisma.product.findMany({
      include: { properties: true, comments: { include: { user: true } } },
    }),
  ['products'],
  {
    revalidate: 60 * 60 * 2, // two hours,
  },
)
