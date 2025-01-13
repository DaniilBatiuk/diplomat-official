import { ProductItem } from '../product-item/product-item'

import styles from './../../../../profile.module.scss'

interface HistoryItemProps {
  product: IProductBase
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ product }: HistoryItemProps) => {
  return (
    <div className={styles.history__item}>
      <div className={styles.history__item_number_date}>
        <p className={styles.history__item_number}>№1</p>
        <p className={styles.history__item_date}>14/03/2000</p>
      </div>
      <div className={styles.history__item_products}>
        <ProductItem product={product} />
      </div>
      <div className={styles.history__item_footer}>
        <p className={styles.history__item_sum_text}>Загалом:</p>
        <p className={styles.history__item_sum}>999 999 ₴</p>
      </div>
    </div>
  )
}
