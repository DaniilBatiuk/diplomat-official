import Ukr from '@../../public/Ukr.png'
import Nova from '@../../public/nova.png'
import Image from 'next/image'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './../../product.module.scss'
import { Link } from '@/components'

export const InfoColumns: React.FC = () => {
  return (
    <section className={styles.product__columns}>
      <div className={styles.product__column}>
        <div className={styles.product__column_title}>
          {ICONS.menuDelivery()} <h3>ДОСТАВКА</h3>
        </div>
        <div className={styles.product__column_body}>
          <div className={styles.product__column_body_line}>
            <Image
              src={Nova}
              width={40}
              height={40}
              alt='photo'
              priority
              quality={100}
              loading={'eager'}
            />
            <div className={styles.product__column_body_text}>
              <div className={styles.product__column_body_text_line}>
                <h4>Нова пошта</h4>
                <p>Від 60 ₴</p>
              </div>
              <p>У відділення, Кур'єром, У поштомат</p>
            </div>
          </div>
          <div className={styles.product__column_body_line}>
            <Image
              src={Ukr}
              width={40}
              height={40}
              alt='photo'
              priority
              quality={100}
              loading={'eager'}
            />
            <div className={styles.product__column_body_text}>
              <div className={styles.product__column_body_text_line}>
                <h4>Укрпошта</h4>
                <p>Від 60 ₴</p>
              </div>
              <p>У відділення, Кур'єром</p>
            </div>
          </div>
        </div>
        <p>
          Більше інфромації за{' '}
          <Link href={LINKS.Delivery} prefetch>
            посиланням
          </Link>
          .
        </p>
      </div>
      <div className={styles.product__column}>
        <div className={styles.product__column_title}>
          {ICONS.menuPayment()} <h3>ОПЛАТА</h3>
        </div>
        <div className={styles.product__column_body}>
          <h4>Оплатити заказ можливо наступними способами:</h4>
          <ul>
            <li>Оплата при отриманні товару</li>
            <li>Оплата картой Visa/MasterCard</li>
            <li>Оплата за безготівковим розрахунком</li>
            <li>Оплата за реквізитами для фізичних осіб</li>
          </ul>
        </div>
        <p>
          Більше інфромації за{' '}
          <Link href={LINKS.Payment} prefetch>
            посиланням
          </Link>
          .
        </p>
      </div>
      <div className={styles.product__column}>
        <div className={styles.product__column_title}>
          {ICONS.menuReturnProduct()} <h3>ПОВЕРНЕННЯ</h3>
        </div>
        <div className={styles.product__column_body}>
          <p className={styles.product__column_body_return}>
            Повернення та обмін товарів можливий протягом 14 днів після отримання товару покупцем.
            Зворотня доставка товарів здійснюється за рахунок покупця. Поверненню підлягає тільки
            непошкоджений товар, який не був у використанні та в нього збережений товарний вигляд та
            упаковка.
          </p>
        </div>
        <p>
          Більше інфромації за{' '}
          <Link href={LINKS.ReturnProduct} prefetch>
            посиланням
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
