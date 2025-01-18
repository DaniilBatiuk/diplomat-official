import styles from './../../categories.module.scss'
import { CardSkeleton } from '@/components'

export const LoadingProducts: React.FC = () => {
  return (
    <section className={styles.list__section}>
      <div className={styles.list}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  )
}
