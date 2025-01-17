import { notFound } from 'next/navigation'

import { Comments } from './components/comments/commments'
import { HeaderImages } from './components/header-images/header-images'
import { InfoColumns } from './components/info-columns/info-columns'
import { ProductInfo } from './components/product-info/product-info'
import styles from './product.module.scss'
import { ProductSwiper } from '@/components'
import { prisma } from '@/utils/lib/db'
import { getProductDetails, getProductsWithSameSubcategory } from '@/utils/lib/queries'

export async function generateStaticParams() {
  const products = await prisma.product.findMany()
  return products.map(product => ({
    id: product.id,
  }))
}

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  const product = await getProductDetails(id)

  if (!product) return notFound()

  const productsSimilar = await getProductsWithSameSubcategory(product.subcategoryId, id)

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <section className={styles.product__header}>
          <HeaderImages images={product.imageUrls} />
          <ProductInfo product={product} />
        </section>
        <InfoColumns />
        {productsSimilar.length > 0 && (
          <ProductSwiper noPadding title={'Схожі товари'} products={productsSimilar} />
        )}
        <Comments comments={product.comments} productId={product.id} />
      </div>
    </div>
  )
}
