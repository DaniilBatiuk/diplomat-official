import clsx from 'clsx'
import Link from 'next/link'

import { LINKS } from '@/utils/config/links'

import styles from './gallery.module.scss'
import { Title } from '@/components'

export const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <Title>Подарунки по категоріях</Title>
        <div className={styles.gallery__list}>
          <Link
            href={LINKS.Home}
            className={clsx(styles.gallery__item, styles.gallery__item__more_first)}
          >
            <img src={'gallery1.webp'} alt='category' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Настільні ігри</p>
          </Link>
          <Link
            href={LINKS.Home}
            className={clsx(styles.gallery__item, styles.gallery__item__more_width)}
          >
            <img src={'gallery2.webp'} alt='category' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Інтер'єр та декор</p>
          </Link>

          <Link
            href={LINKS.Home}
            className={clsx(styles.gallery__item, styles.gallery__item__more)}
          >
            <img src={'gallery6.webp'} alt='category' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Фігурки та статуетки</p>
          </Link>
          <Link href={LINKS.Home} className={styles.gallery__item}>
            <img src={'gallery3.webp'} alt='category' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Посуд</p>
          </Link>
          <Link
            href={LINKS.Home}
            className={clsx(styles.gallery__item, styles.gallery__item_height)}
          >
            <img src={'gallery4.webp'} alt='category' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Символи року</p>
          </Link>
          <Link href={LINKS.Home} className={styles.gallery__item}>
            <img src={'gallery5.webp'} alt='category' />
            <div className={styles.gallery__item__gradient}></div>
            <p>Годинники</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
