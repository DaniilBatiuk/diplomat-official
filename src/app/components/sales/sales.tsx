import styles from './sales.module.scss'
import { CustomButton } from '@/components'

export const Sales: React.FC = () => {
  return (
    <section className={styles.sales}>
      <div className={styles.sales__container}>
        <img src={'sales.webp'} alt='logo' className={styles.sales__img} />
        <div className={styles.sales__right}>
          <h2>Час дарувати вигідно!</h2>
          <p>
            Знайдіть подарунок, який буде приємним не тільки для душі, але й для гаманця. Обирайте
            найкращі пропозиції та заощаджуйте на кожній покупці!
          </p>
          <CustomButton extraBig58>ДО ЗНИЖОК</CustomButton>
        </div>
      </div>
    </section>
  )
}
