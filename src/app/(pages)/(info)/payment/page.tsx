import Link from 'next/link'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './../info.module.scss'
import { CustomButton, Title } from '@/components'

export default function Payment() {
  return (
    <div className={styles.content}>
      <Title isH1 className={styles.content__title}>
        Оплата
      </Title>
      <p className={styles.content__colon}>Оплатити замовлення можна наступними способами:</p>
      <div className={styles.content__list}>
        <div className={styles.content__item}>
          <h2>1. Оплата при отриманні товару</h2>
          <p>
            Оплата провадиться при отриманні товару в пункті самовивезення, при доставці або на
            складі “Нової Пошти”, а також "Укрпошти".
          </p>
          <p>Зверніть увагу на те, що оплата здійснюється виключно у національній валюті.</p>
          <p className={styles.content__item_bold_orange}>
            Мінімальна сума замовлення для відправки Новою Поштою з оплатою при отриманні - 200
            грн. 
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>2. Онлайн оплата карткою Visa/Mastercard</h2>
          <p>
            Оплату можна здійснити відразу після оформлення замовлення. Доставка товару здійснюється
            після надходження коштів.
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>3. Оплата за безготівковим розрахунком</h2>
          <p>
            Ви можете сплатити замовлення в будь-якому банку України, отримавши від нас рахунок на
            оплату.
          </p>
          <p>
            Доставка товару, оплаченого за безготівковим розрахунком, здійснюється після надходження
            коштів на розрахунковий рахунок.
          </p>
          <p>Розрахунок здійснюється в національній валюті.</p>
        </div>
        <div className={styles.content__item}>
          <h2>4. Оплата за реквізитами для фізичних осіб</h2>
          <p>
            Після погодження замовлення вам буде надіслано реквізити для оплати. Доставка товару
            здійснюється після надходження коштів.
          </p>
        </div>
      </div>
      <div className={styles.content__buttons}>
        <Link href={LINKS.Delivery} className={styles.content__button_right} prefetch>
          <CustomButton className={styles.content__button}>
            Доставка
            {ICONS.arrowRight()}
          </CustomButton>
        </Link>
      </div>
    </div>
  )
}
