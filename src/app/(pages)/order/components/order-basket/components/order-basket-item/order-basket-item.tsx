import clsx from 'clsx'
import Image from 'next/image'

import { ICONS } from '@/utils/config/icons'

import styles from './../../../../order.module.scss'
import ProductImg from '@/../public/product100x100.jpg'
import { calculateRoundedPrice } from '@/utils/helpers'

interface OrderBasketItemProp {
  product: IProductBase
}

export const OrderBasketItem: React.FC<OrderBasketItemProp> = ({
  product,
}: OrderBasketItemProp) => {
  return (
    <div className={styles.order__basket_item}>
      <Image src={ProductImg} width={100} height={100} alt='product' loading={'eager'} />
      <div className={styles.order__basket_item_info}>
        <p className={styles.order__basket_item_title}>{product.name}</p>
        <div className={styles.order__basket_item_counter}>
          {/* <Counter /> */}
          <div className={styles.order__basket_item_prices}>
            {product.discountPercent && (
              <p className={styles.order__basket_item_sale}>
                {product.price.toLocaleString('uk-UA')} ₴
              </p>
            )}

            <p
              className={clsx(styles.order__basket_item_price, {
                [styles.order__basket_item_price_discount]: product.discountPercent,
              })}
            >
              {calculateRoundedPrice(product.price, product.discountPercent)} ₴ ₴
            </p>
          </div>
        </div>
        {ICONS.close({ className: styles.order__basket_item_close })}
      </div>
    </div>
  )
}
