import { Skeleton } from '@mui/material'

import styles from './../../order.module.scss'

export const BasketSkeleton: React.FC = () => {
  return <Skeleton variant='rectangular' className={styles.order__basket_skeleton}></Skeleton>
}
