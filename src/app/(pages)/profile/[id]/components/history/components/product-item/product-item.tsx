import clsx from 'clsx'
import Image from 'next/image'

import styles from './../../../../profile.module.scss'
import { calculateRoundedPrice } from '@/utils/helpers'

interface ProductItem {
  cartItem: ICartItemDto
}

export const ProductItem: React.FC<ProductItem> = ({ cartItem }: ProductItem) => {
  return (
    <div className={styles.product_item}>
      <Image
        src={cartItem.product.imageUrls[0]}
        width={80}
        height={80}
        alt='product'
        loading={'eager'}
      />
      <div className={styles.product_item_info}>
        <p className={styles.product_item_title}>{cartItem.product.name}</p>
        <div className={styles.product_item_count_prices}>
          <p className={styles.product_item_count}>{cartItem.quantity} шт.</p>
          <div className={styles.product_item_prices}>
            {cartItem.product.discountPercent && (
              <p className={styles.product_item_sale}>
                {(cartItem.product.price * cartItem.quantity).toLocaleString('uk-UA')} ₴
              </p>
            )}
            <p
              className={clsx(styles.product_item_price, {
                [styles.product_item_price_discount]: cartItem.product.discountPercent,
              })}
            >
              {calculateRoundedPrice(
                cartItem.product.price,
                cartItem.product.discountPercent,
                cartItem.quantity,
              )}{' '}
              ₴
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
