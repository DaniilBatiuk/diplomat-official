'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { LINKS } from '@/utils/config/links'

import styles from './sales.module.scss'
import SalesImg from '@/../public/sales.webp'
import { CustomButton, Link } from '@/components'

export const Sales: React.FC = () => {
  const { push, replace, refresh } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <section className={styles.sales}>
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
      <Suspense fallback={'loading... 3 '}>
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
      <Suspense fallback={'loading... 4 '}>
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
      <div className={styles.sales__container}>
        <Image
          src={SalesImg}
          alt='SalePhoto'
          placeholder='blur'
          loading={'eager'}
          quality={100}
          className={styles.sales__img}
        />
        <div className={styles.sales__right}>
          <h2>Час дарувати вигідно!</h2>
          <p>
            Знайдіть подарунок, який буде приємним не тільки для душі, але й для гаманця. Обирайте
            найкращі пропозиції та заощаджуйте на кожній покупці!
          </p>
          <Link href={LINKS.Categories + '?SortBy=Знижки'} prefetch>
            <CustomButton>ДО ЗНИЖОК</CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
