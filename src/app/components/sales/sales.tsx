import { LINKS } from '@/utils/config/links'

import styles from './sales.module.scss'
import { CustomButton, Link } from '@/components'

export const Sales: React.FC = () => {
  return (
    <section className={styles.sales}>
      <div className={styles.sales__container}>
        <img src={'/sales.webp'} alt='logo' className={styles.sales__img} />
        <div className={styles.sales__right}>
          <h2>Час дарувати вигідно!</h2>
          <p>
            Знайдіть подарунок, який буде приємним не тільки для душі, але й для гаманця. Обирайте
            найкращі пропозиції та заощаджуйте на кожній покупці!
          </p>
          <Link href={LINKS.Categories + '/Знижки'} prefetch>
            <CustomButton>ДО ЗНИЖОК</CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
