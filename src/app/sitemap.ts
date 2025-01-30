import { MetadataRoute } from 'next'

import { LINKS } from '@/utils/constants'

import { prisma } from '@/utils/lib/db'
import { getCategories, getProducts } from '@/utils/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allCategories = await getCategories()
  const products = await await getProducts()
  const users = await prisma.user.findMany()

  const categoryEntries: MetadataRoute.Sitemap = allCategories.map(category => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Categories}/${category.name}`,
    changeFrequency: 'weekly',
    priority: 1,
  }))

  const subcategoryEntries: MetadataRoute.Sitemap = allCategories.flatMap(category =>
    category.subcategories.map(subcategory => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Categories}/${category.name}/${subcategory.name}`,
      changeFrequency: 'weekly',
      priority: 1,
    })),
  )

  const productEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Product}/${id}`,
    priority: 1,
    changeFrequency: 'weekly',
  }))

  const updateProductEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.UpdateProduct}/${id}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }))

  const usersEntries: MetadataRoute.Sitemap = users.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Profile}/${id}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.AboutUs}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Admin}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Order}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Delivery}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.Payment}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.PrivacyPolicy}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.ReturnProduct}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.RulesAndConditions}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${LINKS.CreateProduct}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },

    ...productEntries,
    ...usersEntries,
    ...updateProductEntries,
    ...categoryEntries,
    ...subcategoryEntries,
  ]
}
