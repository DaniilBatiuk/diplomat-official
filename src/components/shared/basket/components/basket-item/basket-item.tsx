import clsx from 'clsx'
import Image from 'next/image'

import { Counter } from '@/components/ui/counter/counter'

import { ICONS } from '@/utils/config/icons'

import styles from './basket-item.module.scss'
import ProductImg from '@/../public/product100x100.jpg'
import { calculateRoundedPrice } from '@/utils/helpers'

interface BasketItemProps {
  product: IProductBase
}
export const BasketItem: React.FC<BasketItemProps> = ({ product }: BasketItemProps) => {
  return (
    <div className={styles.item}>
      <Image src={ProductImg} width={100} height={100} alt='product' loading={'eager'} />
      <div className={styles.item_info}>
        <p className={styles.item_info_title}>{product.name}</p>
        <div className={styles.item_info_counter}>
          <Counter />
          <div className={styles.item_info_prices}>
            {product.discountPercent && (
              <p className={styles.item_info_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
            )}
            <p
              className={clsx(styles.item_info_price, {
                [styles.item_info_price_discount]: product.discountPercent,
              })}
            >
              {calculateRoundedPrice(product.price, product.discountPercent)} ₴ ₴
            </p>
          </div>
        </div>
        {ICONS.close({ className: styles.item_info_close })}
      </div>
    </div>
  )
}
