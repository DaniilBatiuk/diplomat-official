'use client'

import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { breakPoints } from './constants'
import styles from './product-swiper.module.scss'
import { Card, CardSkeleton, CustomButton, Title } from '@/components'

interface ProductSwiperProps {
  title: string
  products: IProductBase[]
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

  const { push, replace, refresh } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log('pathname', pathname)

  return (
    <section className={styles.recommend}>
      <div
        className={clsx(styles.recommend__container, { [styles.recommend__no_padding]: noPadding })}
      >
        <Title>{title}</Title>
        <CustomButton
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('SortBy', new Date().toString())
            const newURL = `${pathname}?${params.toString()}`
            push(newURL, {
              scroll: false,
            })
          }}
        >
          Test add in url with router.push
        </CustomButton>
        <CustomButton
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('SortBy', new Date().toString())
            const newURL = `${pathname}?${params.toString()}`
            replace(newURL, {
              scroll: false,
            })
          }}
        >
          Test add in url with router.replace
        </CustomButton>
        <CustomButton
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('SortBy', new Date().toString())
            const newURL = `${pathname}?${params.toString()}`
            push(newURL, {
              scroll: false,
            })
            refresh()
          }}
        >
          Test add in url with router.push with refresh
        </CustomButton>
        <CustomButton
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('SortBy', new Date().toString())
            const newURL = `${pathname}?${params.toString()}`
            replace(newURL, {
              scroll: false,
            })
            refresh()
          }}
        >
          Test add in url with router.replace with refresh
        </CustomButton>
        <Suspense fallback={'loading... 1 '}>
          <CustomButton
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
              params.set('SortBy', new Date().toString())
              const newURL = `${pathname}?${params.toString()}`
              push(newURL, {
                scroll: false,
              })
            }}
          >
            Test add in url with router.push with suspense
          </CustomButton>
        </Suspense>
        <Suspense fallback={'loading... 2 '}>
          <CustomButton
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
              params.set('SortBy', new Date().toString())
              const newURL = `${pathname}?${params.toString()}`
              replace(newURL, {
                scroll: false,
              })
            }}
          >
            Test add in url with router.replace with suspense
          </CustomButton>
        </Suspense>
        <Suspense fallback={'loading... 1 '}>
          <CustomButton
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
              params.set('SortBy', new Date().toString())
              const newURL = `${pathname}?${params.toString()}`
              push(newURL, {
                scroll: false,
              })
              refresh()
            }}
          >
            Test add in url with router.push with suspense with refresh
          </CustomButton>
        </Suspense>
        <Suspense fallback={'loading... 2 '}>
          <CustomButton
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
              params.set('SortBy', new Date().toString())
              const newURL = `${pathname}?${params.toString()}`
              replace(newURL, {
                scroll: false,
              })
              refresh()
            }}
          >
            Test add in url with router.replace with suspense with refresh
          </CustomButton>
        </Suspense>
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
