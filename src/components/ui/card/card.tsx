'use client'

import CardImg from '@../../public/card.webp'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './card.module.scss'
import { BuyButton } from './components/buy-button/buy-button'
import { Link } from '@/components'

interface CardProp {
  product: Product
}
export const Card: React.FC<CardProp> = ({ product }: CardProp) => {
  return (
    <Link href={`/product/${product.id}`} prefetch>
      <figure className={styles.card}>
        <Image src={CardImg} width={300} height={300} alt='photo' priority quality={100} />
        <p className={styles.card__title}>{product.title}</p>
        <figcaption className={styles.card__info}>
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
          <BuyButton />
        </figcaption>
        {product.discountPercentage > 0 && (
          <div className={styles.card__sale}>-{product.discountPercentage}%</div>
        )}
      </figure>
    </Link>
  )
}
