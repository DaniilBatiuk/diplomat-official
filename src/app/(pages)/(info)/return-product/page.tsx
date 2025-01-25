import clsx from 'clsx'
import { Metadata } from 'next'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from './../info.module.scss'
import { CustomButton, Link, Title } from '@/components'

export const metadata: Metadata = {
  title: 'Повернення',
}

export default function ReturnProduct() {
  return (
    <div className={styles.content}>
      <Title isH1 className={styles.content__title}>
        Повернення
      </Title>
      <div className={styles.content__text}>
        <p>
          Компанія здійснює повернення та обмін товарів належної якості згідно з законом{' '}
          <Link href={'https://zakon.rada.gov.ua/laws/show/1023-12#Text'} target='_blank'>
            «Про захист прав споживачів»
          </Link>
          . Обмін та повернення товарів здійснюється поштовою компанією "Нова пошта".
        </p>
        <p>
          Для розв'язання питань обміну та повернення товарів - зателефонуйте нашому менеджеру за
          номером +38 (067) 535 05 85.
        </p>
        <p>
          Повернення та обмін товарів можливий протягом 
          <span className={styles.content__item_bold_orange}>14 днів</span> після отримання товару
          покупцем. Зворотна доставка товарів здійснюється за рахунок покупця.
        </p>
        <p>
          Поверненню підлягає тільки непошкоджений товар, який не був у використанні та в нього
          збережений товарний вигляд та упаковка.
        </p>
        <p>
          Згідно із Законом{' '}
          <Link href={'https://zakon.rada.gov.ua/laws/show/1023-12#Text'} target='_blank'>
            «Про захист прав споживачів»
          </Link>
          , компанія може відмовити споживачеві в обміні та поверненні товарів належної якості, якщо
          вони належать до категорій, що зазначені у чинному{' '}
          <Link href={'https://zakon.rada.gov.ua/laws/show/172-94-%D0%BF#Text'} target='_blank'>
            Переліку непродовольчих товарів належної якості, не підлягають поверненню та обміну
          </Link>
          .
        </p>
      </div>
      <div className={styles.content__buttons}>
        <Link href={LINKS.Delivery} prefetch>
          <CustomButton className={clsx(styles.content__button, styles.content__button_arrow_left)}>
            {ICONS.arrowRight()}
            Доставка
          </CustomButton>
        </Link>
        <Link href={LINKS.RulesAndConditions} prefetch>
          <CustomButton className={styles.content__button}>
            Правила та умови
            {ICONS.arrowRight()}
          </CustomButton>
        </Link>
      </div>
    </div>
  )
}
