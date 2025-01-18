import clsx from 'clsx'

import { ICONS } from '@/utils/config/icons'

import styles from './../../../categories.module.scss'
import { CardSkeleton } from '@/components'

export const NoData: React.FC = () => {
  return (
    <div className={clsx(styles.list, styles.list__no_data)}>
      <CardSkeleton></CardSkeleton>
      <CardSkeleton></CardSkeleton>
      <CardSkeleton></CardSkeleton>
      <div className={styles.list__empty}>
        {ICONS.empty()}
        <h2>Наразі таких товарів не знайдено</h2>
      </div>
    </div>
  )
}
