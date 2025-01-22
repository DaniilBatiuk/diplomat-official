import { LINKS } from '@/utils/config/links'

import { BasketItem } from '../basket-item/basket-item'

import styles from './../../basket.module.scss'
import { CustomButton, Link } from '@/components'

interface BasketListProps {
  setBasketActive: (menuActive: boolean) => void
  cart: ICartDto
}
export const BasketList: React.FC<BasketListProps> = ({
  setBasketActive,
  cart,
}: BasketListProps) => {
  return (
    <div className={styles.full}>
      <div className={styles.full__list}>
        {cart && cart.items.map(cartItem => <BasketItem key={cartItem.id} cartItem={cartItem} />)}
      </div>
      <div className={styles.total}>
        <div className={styles.total_block}>
          <div className={styles.total_price}>
            <p>До оплати:</p>
            <p>{cart && cart.totalPrice.toLocaleString('uk-UA')} ₴</p>
          </div>
        </div>
        <Link href={LINKS.Order} prefetch onClick={() => setBasketActive(false)}>
          <CustomButton fullWidth>Оформити замовлення</CustomButton>
        </Link>
      </div>
    </div>
  )
}
