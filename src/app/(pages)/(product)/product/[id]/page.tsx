import { PRODUCTS } from '@/utils/config/data'

import { Comments } from './components/comments/commments'
import { HeaderImages } from './components/header-images/header-images'
import { InfoColumns } from './components/info-columns/info-columns'
import { ProductInfo } from './components/product-info/product-info'
import styles from './product.module.scss'
import { ProductSwiper } from '@/components'

export default function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <section className={styles.product__header}>
          <HeaderImages />
          <ProductInfo product={PRODUCTS[0]} />
        </section>
        <InfoColumns />
        <ProductSwiper
          noPadding
          title={'СХОЖІ товари'}
          products={PRODUCTS.filter(product => product.discountPercentage <= 0)}
        />
        <Comments />
      </div>
    </div>
  )
}
