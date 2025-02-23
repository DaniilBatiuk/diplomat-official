import { Skeleton } from '@mui/material'
import { Suspense } from 'react'

import { LINKS } from '@/utils/constants'

import { SelectCategories } from '../select/select'

import styles from './../../categories.module.scss'
import { Link } from '@/components'

interface CategoriesHeaderProps {
  paramsData: {
    category: string | undefined
    subcategory: string | undefined
  }
}

export const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({
  paramsData,
}: CategoriesHeaderProps) => {
  return (
    <div className={styles.categories__header}>
      <p>
        {' '}
        <Link href={LINKS.Home} prefetch>
          Головна
        </Link>{' '}
        /{' '}
        {paramsData.category && (
          <Link href={LINKS.Categories} prefetch>
            Категорії
          </Link>
        )}
        {paramsData.subcategory && (
          <>
            {' '}
            /{' '}
            <Link href={LINKS.Categories + '/' + paramsData.category} prefetch>
              {paramsData.category}
            </Link>
          </>
        )}
      </p>
      <Suspense fallback={<Skeleton variant='rectangular' className={styles.skeleton__filter} />}>
        <SelectCategories />
      </Suspense>
    </div>
  )
}
