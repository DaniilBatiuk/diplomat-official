'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { breakPoints } from './constants'
import styles from './product-swiper.module.scss'
import { Card, CardSkeleton, Title } from '@/components'

interface ProductSwiperProps {
  title: string
  products: IProductEntity[]
  noPadding?: boolean
}
export const ProductSwiper: React.FC<ProductSwiperProps> = ({
  title,
  products,
  noPadding,
}: ProductSwiperProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <section className={styles.recommend}>
      <div
        className={clsx(styles.recommend__container, { [styles.recommend__no_padding]: noPadding })}
      >
        <Title>{title}</Title>
        {isLoading ? (
          <div className={styles.skeleton__container}>
            <div className={styles.skeleton}>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
        ) : (
          <div className={styles.recommend__list}>
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={4}
              spaceBetween={11}
              breakpoints={breakPoints}
            >
              {products.map(product => (
                <SwiperSlide key={product.id}>
                  <Card product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  )
}
