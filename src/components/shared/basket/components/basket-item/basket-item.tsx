import clsx from 'clsx'
import Image from 'next/image'

import { Counter } from '@/components/ui/counter/counter'

import { ICONS } from '@/utils/config/icons'

import styles from './basket-item.module.scss'
import { calculateRoundedPrice } from '@/utils/helpers'
import { useCartItemDelete, useCartItemUpdate } from '@/utils/hooks'

interface BasketItemProps {
  cartItem: ICartItemDto
}
export const BasketItem: React.FC<BasketItemProps> = ({ cartItem }: BasketItemProps) => {
  const { mutate: deleteCartItem, isPending: deleteCartItemIsPending } = useCartItemDelete()
  const { mutate: updateCartItem, isPending: updateCartItemIsPending } = useCartItemUpdate()

  return (
    <div className={styles.item}>
      <Image src={cartItem.product.imageUrls[0]} width={100} height={100} alt='product' />
      <div className={styles.item_info}>
        <p className={styles.item_info_title}>{cartItem.product.name}</p>
        <div className={styles.item_info_counter}>
          <Counter mutation={updateCartItem} id={cartItem.id} quantity={cartItem.quantity} />
          <div
            className={clsx(styles.item_info_prices, { [styles.pending]: updateCartItemIsPending })}
          >
            {cartItem.product.discountPercent && (
              <p className={styles.item_info_sale}>
                {(cartItem.product.price * cartItem.quantity).toLocaleString('uk-UA')} ₴
              </p>
            )}
            <p
              className={clsx(styles.item_info_price, {
                [styles.item_info_price_discount]: cartItem.product.discountPercent,
              })}
            >
              {calculateRoundedPrice(
                cartItem.product.price * cartItem.quantity,
                cartItem.product.discountPercent,
              )}{' '}
              ₴
            </p>
          </div>
        </div>
        {ICONS.close({
          className: styles.item_info_close,
          onClick: () => {
            if (!deleteCartItemIsPending) deleteCartItem(cartItem.id)
          },
        })}
      </div>
    </div>
  )
}
