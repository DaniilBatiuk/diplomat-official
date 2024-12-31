import CardImg from '@../../public/card.webp'
import clsx from 'clsx'
import Image from 'next/image'

import { ICONS } from '@/utils/config/icons'

import { CustomButton } from '../custom-button/custom-button'

import styles from './card.module.scss'

interface CardProp {
  product: Product
}
export const Card: React.FC<CardProp> = ({ product }: CardProp) => {
  return (
    <figure className={styles.card}>
      <Image src={CardImg} width={300} height={300} alt='photo' priority quality={100} />
      <p className={styles.card__title}>{product.title}</p>
      <div className={styles.card__info}>
        <div className={styles.card__prices}>
          {product.discountPercentage > 0 && (
            <p className={styles.card__price_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
          )}
          <p
            className={clsx(styles.card__price_price, {
              [styles.discount]: product.discountPercentage > 0,
            })}
          >
            {product.price.toLocaleString('uk-UA')} ₴
          </p>
        </div>
        <CustomButton>{ICONS.buy()}</CustomButton>
      </div>
    </figure>
  )
}
