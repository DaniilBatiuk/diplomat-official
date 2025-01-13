'use client'

import CardImg from '@../../public/card.webp'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './card.module.scss'
import { BuyButton } from './components/buy-button/buy-button'
import { Link } from '@/components'

interface CardProp {
  product: IProductBase
}
export const Card: React.FC<CardProp> = ({ product }: CardProp) => {
  let imageCount = 0

  return (
    <Link href={`/product/${product.id}`} prefetch>
      <figure className={styles.card}>
        <Image
          src={product.imageUrls?.[0] || CardImg}
          loading={imageCount++ < 15 ? 'eager' : 'lazy'}
          decoding='sync'
          width={300}
          height={300}
          alt='photo'
          priority
          quality={100}
        />
        <p className={styles.card__title}>{product.name}</p>
        <figcaption className={styles.card__info}>
          <div className={styles.card__prices}>
            {product.discountPercent && (
              <p className={styles.card__price_sale}>{product.price.toLocaleString('uk-UA')} ₴</p>
            )}
            {product.discountPercent && (
              <p
                className={clsx(styles.card__price_price, {
                  [styles.discount]: product.discountPercent,
                })}
              >
                {(() => {
                  const discountedPrice =
                    product.price - (product.price * product.discountPercent) / 100
                  const roundedPrice = Math.round(discountedPrice)
                  return roundedPrice.toLocaleString('uk-UA')
                })()}{' '}
                ₴
              </p>
            )}
          </div>
          <BuyButton />
        </figcaption>
        {product.discountPercent && (
          <div className={styles.card__sale}>-{product.discountPercent}%</div>
        )}
      </figure>
    </Link>
  )
}
