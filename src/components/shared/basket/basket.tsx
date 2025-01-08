import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { PRODUCTS } from '@/utils/config/data'
import { ICONS } from '@/utils/config/icons'

import { CustomButton } from '../../ui/custom-button/custom-button'
import { DarkBackground } from '../dark-background/dark-background'

import styles from './basket.module.scss'
import { BasketItem } from './components/basket-item/basket-item'

interface BasketProp {
  basketActive: boolean
  setBasketActive: Dispatch<SetStateAction<boolean>>
}
export const Basket: React.FC<BasketProp> = ({ basketActive, setBasketActive }: BasketProp) => {
  return (
    <>
      <DarkBackground backgroundActive={basketActive} onClick={() => setBasketActive(false)} />
      <div
        className={clsx(styles.basket, {
          [styles.active]: basketActive,
        })}
      >
        <div className={styles.basket__header}>
          <p>Кошик</p>
          {ICONS.close({
            onClick: () => setBasketActive(false),
            className: styles.basket__header_close,
          })}
        </div>
        <div className={styles.basket__body}>
          {false ? (
            <div className={styles.empty}>
              <p className={styles.empty_title}>Кошик порожній</p>
              <p className={styles.empty_subtitle}>
                <span>Подивіться наш каталог, ви обов'язково</span>
                <span>щось знайдете</span>
              </p>
              <img src={'/empty.png'} alt='basket' />
              <CustomButton fullWidth>До категорій</CustomButton>
            </div>
          ) : (
            <div className={styles.full}>
              <div className={styles.full__list}>
                {PRODUCTS.map(product => (
                  <BasketItem key={product.id} product={product} />
                ))}
              </div>
              <div className={styles.total}>
                <div className={styles.total_block}>
                  <div className={styles.total_sale}>
                    <p>Знижка:</p>
                    <p>- {PRODUCTS[2].price.toLocaleString('uk-UA')} ₴</p>
                  </div>
                  <div className={styles.total_price}>
                    <p>До оплати:</p>
                    <p>{PRODUCTS[1].price.toLocaleString('uk-UA')} ₴</p>
                  </div>
                </div>
                <CustomButton fullWidth>Оформити замовлення</CustomButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
