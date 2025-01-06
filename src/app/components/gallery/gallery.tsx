import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { LINKS } from '@/utils/config/links'

import styles from './gallery.module.scss'
import gallery1 from '@/../public/gallery1.webp'
import gallery2 from '@/../public/gallery2.webp'
import gallery3 from '@/../public/gallery3.webp'
import gallery4 from '@/../public/gallery4.webp'
import gallery5 from '@/../public/gallery5.webp'
import gallery6 from '@/../public/gallery6.webp'
import { Title } from '@/components'

export const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <Title>Подарунки по категоріях</Title>
        <div className={styles.gallery__list}>
          <Link
            href={LINKS.Categories + '/Настільні ігри'}
            className={clsx(styles.gallery__item, styles.gallery__item__more_first)}
            prefetch
          >
            {/* <img src={'gallery1.webp'} alt='category' /> */}
            <Image src={gallery1} alt='gallary1' priority placeholder='blur' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Настільні ігри</p>
          </Link>
          <Link
            href={LINKS.Categories + "/Інтер'єр та декор"}
            className={clsx(styles.gallery__item, styles.gallery__item__more_width)}
            prefetch
          >
            {/* <img src={'gallery2.webp'} alt='category' /> */}
            <Image src={gallery2} alt='gallary2' priority placeholder='blur' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Інтер'єр та декор</p>
          </Link>

          <Link
            href={LINKS.Categories + '/Фігурки та статуетки'}
            className={clsx(styles.gallery__item, styles.gallery__item__more)}
            prefetch
          >
            {/* <img src={'gallery6.webp'} alt='category' /> */}
            <Image src={gallery6} alt='gallary6' priority placeholder='blur' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Фігурки та статуетки</p>
          </Link>
          <Link href={LINKS.Categories + '/Посуд'} className={styles.gallery__item} prefetch>
            {/* <img src={'gallery3.webp'} alt='category' /> */}
            <Image src={gallery3} alt='gallary3' priority placeholder='blur' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Посуд</p>
          </Link>
          <Link
            href={LINKS.Categories + '/Символи року'}
            prefetch
            className={clsx(styles.gallery__item, styles.gallery__item_height)}
          >
            {/* <img src={'gallery4.webp'} alt='category' /> */}
            <Image src={gallery4} alt='gallary4' priority placeholder='blur' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Символи року</p>
          </Link>
          <Link href={LINKS.Categories + '/Годинники'} prefetch className={styles.gallery__item}>
            {/* <img src={'gallery5.webp'} alt='category' /> */}
            <Image src={gallery5} alt='gallary5' priority placeholder='blur' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Годинники</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
