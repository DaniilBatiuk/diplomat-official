import clsx from 'clsx'
import Image from 'next/image'

import { LINKS } from '@/utils/constants'

import styles from './gallery.module.scss'
import gallery2 from '@/../public/gallery2.webp'
import gallery3 from '@/../public/gallery3.webp'
import gallery5 from '@/../public/gallery5.webp'
import gallery6 from '@/../public/gallery6.webp'
import gallery7 from '@/../public/gallery7.webp'
import { Link, Title } from '@/components'

export const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__container}>
        <Title>Подарунки по категоріях</Title>
        <div className={styles.gallery__list}>
          <Link
            href={LINKS.Categories + "/Інтер'єр та декор"}
            className={clsx(styles.gallery__item, styles.gallery__item__more_width)}
            prefetch
          >
            <Image src={gallery2} alt='gallary2' priority placeholder='blur' loading={'eager'} />
            <div className={styles.gallery__item__gradient}></div>
            <p>Інтер'єр та декор</p>
          </Link>
          <Link
            href={LINKS.Categories + '/Фігурки та статуетки'}
            className={clsx(styles.gallery__item, styles.gallery__item__more)}
            prefetch
          >
            <Image src={gallery6} alt='gallary6' priority placeholder='blur' loading={'eager'} />
            <div className={styles.gallery__item__gradient}></div>
            <p>Фігурки та статуетки</p>
          </Link>
          <Link href={LINKS.Categories + '/Посуд'} className={styles.gallery__item} prefetch>
            <Image src={gallery3} alt='gallary3' priority placeholder='blur' loading={'eager'} />
            <div className={styles.gallery__item__gradient}></div>
            <p>Посуд</p>
          </Link>
          <Link
            href={LINKS.Categories + '/Настільні ігри'}
            prefetch
            className={clsx(styles.gallery__item, styles.gallery__item_height)}
          >
            <Image src={gallery7} alt='gallary7' priority placeholder='blur' loading={'eager'} />
            <div className={styles.gallery__item__gradient}></div>
            <p>Настільні ігри</p>
          </Link>
          <Link href={LINKS.Categories + '/Годинники'} prefetch className={styles.gallery__item}>
            <Image src={gallery5} alt='gallary5' priority placeholder='blur' loading={'eager'} />
            <div className={styles.gallery__item__gradient}></div>
            <p>Годинники</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
