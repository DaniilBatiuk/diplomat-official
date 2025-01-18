import Image from 'next/image'

import { LINKS } from '@/utils/config/links'

import styles from './sales.module.scss'
import SalesImg from '@/../public/sales.webp'
import { CustomButton, Link } from '@/components'

export const Sales: React.FC = () => {
  return (
    <section className={styles.sales}>
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
