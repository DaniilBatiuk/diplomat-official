import CardImg from '@../../public/card.webp'
import { $Enums } from '@prisma/client'
import clsx from 'clsx'
import Image from 'next/image'

import { LINKS } from '@/utils/config/links'

import styles from './card.module.scss'
import { AdminBlock } from './components/admin-block/admin-block'
import { BuyButton } from './components/buy-button/buy-button'
import { Link } from '@/components'
import { calculateRoundedPrice } from '@/utils/helpers'

interface CardProp {
  product: IProductBase
  onAdminPage?: boolean
}
export const Card: React.FC<CardProp> = ({ product, onAdminPage }: CardProp) => {
  console.log('render card', product.id)
  return (
    <figure className={styles.card}>
      <Link href={LINKS.Product + `/${product.id}`} prefetch className={styles.card__link}>
        <Image
          src={product.imageUrls?.[0] || CardImg}
          loading={'eager'}
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

            <p
              className={clsx(styles.card__price_price, {
                [styles.discount]: product.discountPercent,
              })}
            >
              {calculateRoundedPrice(product.price, product.discountPercent)} ₴
            </p>
          </div>
        </figcaption>
        {product.discountPercent && (
          <div className={styles.card__sale}>-{product.discountPercent}%</div>
        )}
      </Link>
      <BuyButton onAdminPage={onAdminPage} product={product} />
      {onAdminPage && product.status === $Enums.Status.inactive && <AdminBlock id={product.id} />}
    </figure>
  )
}
