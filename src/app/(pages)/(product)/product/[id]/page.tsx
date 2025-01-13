import Image from 'next/image'

import { Comments } from './components/comments/commments'
import { HeaderImages } from './components/header-images/header-images'
import { InfoColumns } from './components/info-columns/info-columns'
import { ProductInfo } from './components/product-info/product-info'
import styles from './product.module.scss'
import { ProductSwiper } from '@/components'
import { prisma } from '@/utils/lib/db'

export async function generateStaticParams() {
  const products = await prisma.product.findMany()
  return products.map(product => ({
    slug: product.id,
  }))
}

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const product = await prisma.product.findUnique({
    where: { id: id },
    include: { properties: true, comments: { include: { user: true } } },
  })

  if (!product) {
    return <div>Product not found</div>
  }
  const productsSimilar = await prisma.product.findMany({
    where: { subcategoryId: product.subcategoryId, NOT: { id: product.id } },
  })

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <section className={styles.product__header}>
          <HeaderImages images={product.imageUrls} />
          <ProductInfo product={product} />
        </section>
        <InfoColumns />
        {productsSimilar && (
          <ProductSwiper noPadding title={'Схожі товари'} products={productsSimilar} />
        )}
        <Image
          src={'https://utfs.io/f/O6pySqs2by3eFv53RqdswPENz5AfW8BReDl6vqXLj7ZxKHaQ'}
          width={400}
          height={400}
          alt='photo'
          priority
          quality={100}
          loading='eager'
          decoding='sync'
        />
        <Comments comments={product.comments} />
      </div>
    </div>
  )
}
