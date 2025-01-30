import { MetadataRoute } from 'next'

import { LINKS } from '@/utils/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [LINKS.Admin, LINKS.CreateProduct, LINKS.UpdateProduct],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}
