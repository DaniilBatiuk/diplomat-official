'use client'

import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { breakPoints } from './constants'
import styles from './product-swiper.module.scss'
import { Card, Title } from '@/components'

interface ProductSwiperProps {
  title: string
  products: Product[]
}
export const ProductSwiper: React.FC<ProductSwiperProps> = ({
  title,
  products,
}: ProductSwiperProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div className={styles.recommend__list}>Loading...</div>
  }

  return (
    <section className={styles.recommend}>
      <div className={styles.recommend__container}>
        <Title>{title}</Title>

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
      </div>
    </section>
  )
}
