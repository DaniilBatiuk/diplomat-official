import clsx from 'clsx'
import Image from 'next/image'

import styles from './../../../../profile.module.scss'
import ProductImg from '@/../public/product100x100.jpg'

interface ProductItem {
  product: Product
}

export const ProductItem: React.FC<ProductItem> = ({ product }: ProductItem) => {
  return (
    <div className={styles.product_item}>
      <Image src={ProductImg} width={80} height={80} alt='product' />
      <div className={styles.product_item_info}>
        <p className={styles.product_item_title}>{product.title}</p>
        <div className={styles.product_item_count_prices}>
          <p className={styles.product_item_count}>99 шт.</p>
          <div className={styles.product_item_prices}>
            {product.discountPercentage > 0 && (
              <p className={styles.product_item_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
            )}
            <p
              className={clsx(styles.product_item_price, {
                [styles.product_item_price_discount]: product.discountPercentage > 0,
              })}
            >
              {(() => {
                const discountedPrice =
                  product.price - (product.price * product.discountPercentage) / 100
                const roundedPrice = Math.round(discountedPrice)
                return roundedPrice.toLocaleString('uk-UA')
              })()}{' '}
              ₴
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
