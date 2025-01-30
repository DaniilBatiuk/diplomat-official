import clsx from 'clsx'
import Image from 'next/image'

import { ICONS } from '@/utils/constants'

import styles from './../../../../order.module.scss'
import { Counter } from '@/components'
import { calculateRoundedPriceToString } from '@/utils/helpers'
import { useCartItemDelete, useCartItemUpdate } from '@/utils/hooks'

interface OrderBasketItemProp {
  cartItem: ICartItemDto
}

export const OrderBasketItem: React.FC<OrderBasketItemProp> = ({
  cartItem,
}: OrderBasketItemProp) => {
  const { mutate: deleteCartItem, isPending: deleteCartItemIsPending } = useCartItemDelete()
  const { mutate: updateCartItem } = useCartItemUpdate()

  return (
    <div className={styles.order__basket_item}>
      <Image src={cartItem.product.imageUrls[0]} width={100} height={100} alt='product' />
      <div className={styles.order__basket_item_info}>
        <p className={styles.order__basket_item_title}>{cartItem.product.name}</p>
        <div className={styles.order__basket_item_counter}>
          <Counter mutation={updateCartItem} id={cartItem.id} quantity={cartItem.quantity} />
          <div className={styles.order__basket_item_prices}>
            {cartItem.product.discountPercent && (
              <p className={styles.order__basket_item_sale}>
                {(cartItem.product.price * cartItem.quantity).toLocaleString('uk-UA')} ₴
              </p>
            )}
            <p
              className={clsx(styles.order__basket_item_price, {
                [styles.order__basket_item_price_discount]: cartItem.product.discountPercent,
              })}
            >
              {calculateRoundedPriceToString(
                cartItem.product.price,
                cartItem.product.discountPercent,
                cartItem.quantity,
              )}{' '}
              ₴
            </p>
          </div>
        </div>
        {ICONS.close({
          className: styles.order__basket_item_close,
          onClick: () => {
            if (!deleteCartItemIsPending) deleteCartItem(cartItem.id)
          },
        })}
      </div>
    </div>
  )
}
