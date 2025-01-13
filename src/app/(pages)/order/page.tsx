import { Comment } from './components/comment/comment'
import { Delivery } from './components/delivery/delivery'
import { OrderBasket } from './components/order-basket/order-basket'
import { Payment } from './components/payment/payment'
import { PersonalData } from './components/personal-data/personal-data'
import styles from './order.module.scss'
import { Title } from '@/components'

export default function Order() {
  return (
    <div className={styles.order}>
      <section className={styles.order__container}>
        <Title isH1 className={styles.order__title}>
          Оформлення замовлення
        </Title>
        <form noValidate className={styles.order__content}>
          <div className={styles.order__content_left}>
            <OrderBasket />
            <PersonalData />
            <Delivery />
            <Payment />
            <Comment />
          </div>
          {/* <RightBlock product={PRODUCTS[0]} /> */}
        </form>
      </section>
    </div>
  )
}
