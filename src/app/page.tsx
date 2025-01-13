import { Gallery } from './components/gallery/gallery'
import { HomeHeader } from './components/home-header/home-header'
import { Sales } from './components/sales/sales'
import styles from './home.module.scss'
import { ProductSwiper } from '@/components'
import { prisma } from '@/utils/lib/db'
import { getProducts } from '@/utils/lib/queries'

export default async function Home() {
  const categories = await prisma.category.findMany({})

  const products = await getProducts()

  console.log('categories', categories)

  return (
    <div className={styles.page}>
      <HomeHeader />
      <Gallery />
      <ProductSwiper
        title={'Рекомендовані товари'}
        products={products.toSorted((a, b) => b.comments.length - a.comments.length).slice(0, 12)}
      />

      <Sales />
      <ProductSwiper
        title={'Товари зі знижкою'}
        products={products.filter(product => product.discountPercent).slice(0, 12)}
      />
    </div>
  )
}
