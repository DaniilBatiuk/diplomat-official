import clsx from 'clsx'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './../info.module.scss'
import { CustomButton, Link, Title } from '@/components'

export default function Delivery() {
  return (
    <div className={styles.content}>
      <Title isH1 className={styles.content__title}>
        Доставка
      </Title>
      <p className={styles.content__colon}>Існує кілька способів доставки:</p>
      <div className={styles.content__list}>
        <div className={styles.content__item}>
          <h2>1. Доставка автоперевізником  "Нова Пошта", або "Укрпошта"</h2>
          <p>
            Вартість доставки не входить до ціни товару, оплата за доставку здійснюється покупцем
            самостійно при отриманні товару.
          </p>
          <p className={styles.content__item_bold_orange}>
            Попередньо оплачені замовлення на суму 3000 грн і вище відправляються безкоштовно до
            складу автоперевізника (доставка великогабаритних замовлень обговорюється окремо). грн. 
          </p>
          <p className={styles.content__item_bold_orange}>
            Мінімальна сума замовлення для доставки в інші міста з оплатою при отриманні - 200 грн. 
          </p>
        </div>
        <div className={styles.content__item}>
          <h2>2. Доставка кур'єром по всій Україні (від дверей до дверей)</h2>
          <p>
            Замовлений товар буде відправлений на відділення перевізника "Нова Пошта", або 
            "Укрпошта". Після прибуття товар буде передано кур'єру, який доставить замовлення
            особисто до рук покупця.
          </p>
        </div>
      </div>
      <div className={styles.content__text}>
        <p>
          Докладніше про послуги Нової пошти можна дізнатися на їх{' '}
          <Link href='https://novapost.com/uk-ua/' target='_blank'>
            офіційному сайті
          </Link>
          .
        </p>
        <p>
          Доставка в регіони здійснюється на умовах 100% передоплати або оплати при отриманні
          вантажу на складі автоперевізника.
        </p>
      </div>
      <div className={styles.content__buttons}>
        <Link href={LINKS.Payment} prefetch>
          <CustomButton className={clsx(styles.content__button, styles.content__button_arrow_left)}>
            {ICONS.arrowRight()}
            Оплата
          </CustomButton>
        </Link>
        <Link href={LINKS.ReturnProduct} prefetch>
          <CustomButton className={styles.content__button}>
            Повернення
            {ICONS.arrowRight()}
          </CustomButton>
        </Link>
      </div>
    </div>
  )
}
