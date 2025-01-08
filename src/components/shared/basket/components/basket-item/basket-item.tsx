import clsx from 'clsx'
import Image from 'next/image'

import { Counter } from '@/components/ui/counter/counter'

import { ICONS } from '@/utils/config/icons'

import styles from './basket-item.module.scss'
import ProductImg from '@/../public/product100x100.jpg'

interface BasketItemProps {
  product: Product
}
export const BasketItem: React.FC<BasketItemProps> = ({ product }: BasketItemProps) => {
  return (
    <div className={styles.item}>
      <Image src={ProductImg} width={100} height={100} alt='product' />
      <div className={styles.item_info}>
        <p className={styles.item_info_title}>{product.title}</p>
        <div className={styles.item_info_counter}>
          <Counter />
          <div className={styles.item_info_prices}>
            {product.discountPercentage > 0 && (
              <p className={styles.item_info_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
            )}
            <p
              className={clsx(styles.item_info_price, {
                [styles.item_info_price_discount]: product.discountPercentage > 0,
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
        {ICONS.close({ className: styles.item_info_close })}
      </div>
    </div>
  )
}
