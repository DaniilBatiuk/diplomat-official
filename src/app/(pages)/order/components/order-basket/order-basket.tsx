import { BasketEmpty } from '@/components/shared/basket/components/basket-empty/basket-empty'

import styles from './../../order.module.scss'
import { OrderBasketItem } from './components/order-basket-item/order-basket-item'
import { FormBlock } from '@/components'

interface OrderBasketProps {
  cart: ICartDto | undefined
}

export const OrderBasket: React.FC<OrderBasketProps> = ({ cart }: OrderBasketProps) => {
  return (
    <FormBlock title='1. Кошик'>
      <div className={styles.order__basket}>
        {cart && cart.items.length > 0 ? (
          cart.items.map(cartItem => <OrderBasketItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <BasketEmpty />
        )}
      </div>
    </FormBlock>
  )
}
