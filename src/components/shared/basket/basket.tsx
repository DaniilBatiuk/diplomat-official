import { keepPreviousData, useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import { getCart } from '@/utils/lib/actions/cart'

import { DarkBackground } from '../dark-background/dark-background'

import styles from './basket.module.scss'
import { BasketEmpty } from './components/basket-empty/basket-empty'
import { BasketList } from './components/basket-list/basket-list'
import { isCartDto } from './helpers/is-cart-dto'

interface BasketProps {
  basketActive: boolean
  setBasketActive: Dispatch<SetStateAction<boolean>>
}

export const Basket: React.FC<BasketProps> = ({ basketActive, setBasketActive }: BasketProps) => {
  const { data: cart } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    placeholderData: keepPreviousData,
  })

  console.log('cart', cart)

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
          {cart && cart.items.length > 0 && isCartDto(cart) ? (
            <BasketList setBasketActive={setBasketActive} cart={cart} />
          ) : (
            <BasketEmpty setBasketActive={setBasketActive} />
          )}
        </div>
      </div>
    </>
  )
}
