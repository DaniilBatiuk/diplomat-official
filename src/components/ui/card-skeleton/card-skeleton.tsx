import { Skeleton } from '@mui/material'

import { PRODUCTS } from '@/utils/constants'

import { Card } from '../card/card'

import styles from './card-skeleton.module.scss'

export const CardSkeleton: React.FC = () => {
  return (
    <Skeleton className={styles.skeleton_item} variant='rectangular'>
      <Card product={PRODUCTS[0]} />
    </Skeleton>
  )
}
