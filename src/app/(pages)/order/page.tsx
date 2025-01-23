import { OrderForm } from './components/order-form/order-form'
import { Warning } from './components/warning/warning'
import styles from './order.module.scss'
import { Title } from '@/components'

export default function Order() {
  return (
    <div className={styles.order}>
      <section className={styles.order__container}>
        <Title isH1 className={styles.order__title}>
          Оформлення замовлення
        </Title>
        <Warning />
        <OrderForm />
      </section>
    </div>
  )
}
