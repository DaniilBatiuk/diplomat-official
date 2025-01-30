import { ICONS } from '@/utils/constants'

import styles from './../../profile.module.scss'
import { HistoryItem } from './components/history-item/history-item'
import { FormBlock } from '@/components'

interface HistoryProps {
  user: IUserDetails
}

export const History: React.FC<HistoryProps> = ({ user }: HistoryProps) => {
  return (
    <FormBlock title='Історія замовлень'>
      {false ? (
        <div className={styles.history__empty}>
          {ICONS.emptyFile()}
          <h2>Наразі у вас немає замовлень</h2>
        </div>
      ) : (
        <div className={styles.history}>
          <div className={styles.history__header}>
            <div className={styles.history__item_number_date}>
              <p className={styles.history__header_number}>№ Заказу</p>
              <p className={styles.history__header_date}>Дата</p>
            </div>
            <p className={styles.history__header_products}>Товари</p>
            <p className={styles.history__header_sum}>Сума</p>
          </div>
          {user.orders.map((order, index) => (
            <HistoryItem key={order.id} order={order} index={index} />
          ))}
        </div>
      )}
    </FormBlock>
  )
}
