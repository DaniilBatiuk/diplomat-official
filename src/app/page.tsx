import { PRODUCTS } from '@/utils/config/data'

import { HomeHeader } from './components/home-header/home-header'
import { Sales } from './components/sales/sales'
import styles from './home.module.scss'
import { ProductSwiper } from '@/components'

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeHeader />
      <ProductSwiper
        title={'Рекомендовані товари'}
        products={PRODUCTS.filter(product => product.discountPercentage <= 0)}
      />
      <Sales />
      <ProductSwiper
        title={'Товари зі знижкою'}
        products={PRODUCTS.filter(product => product.discountPercentage > 0)}
      />
    </div>
  )
}
