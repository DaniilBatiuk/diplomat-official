import { ProductItem } from '../product-item/product-item'

import styles from './../../../../profile.module.scss'

interface HistoryItemProps {
  order: IOrderEntity
  index: number
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ order, index }: HistoryItemProps) => {
  const cartSnapshot = JSON.parse(order.cartSnapshot) as {
    totalPrice: number
    items: ICartItemDto[]
  }
  return (
    <div className={styles.history__item}>
      <div className={styles.history__item_number_date}>
        <p className={styles.history__item_number}>№{index + 1}</p>
        <p className={styles.history__item_date}>
          {new Date(order.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className={styles.history__item_products}>
        {cartSnapshot.items.map(cartItem => (
          <ProductItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className={styles.history__item_footer}>
        <p className={styles.history__item_sum_text}>Загалом:</p>
        <p className={styles.history__item_sum}>
          {cartSnapshot.totalPrice.toLocaleString('uk-UA')} ₴
        </p>
      </div>
    </div>
  )
}
