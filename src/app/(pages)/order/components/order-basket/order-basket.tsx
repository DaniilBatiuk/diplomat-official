import { PRODUCTS } from '@/utils/config/data'

import styles from './../../order.module.scss'
import { OrderBasketItem } from './components/order-basket-item/order-basket-item'
import { FormBlock } from '@/components'

export const OrderBasket: React.FC = () => {
  return (
    <FormBlock title='1. Кошик'>
      <div className={styles.order__basket}>
        <OrderBasketItem product={PRODUCTS[0]} />
        <OrderBasketItem product={PRODUCTS[0]} />
        <OrderBasketItem product={PRODUCTS[0]} />
        <OrderBasketItem product={PRODUCTS[0]} />
      </div>
    </FormBlock>
  )
}
