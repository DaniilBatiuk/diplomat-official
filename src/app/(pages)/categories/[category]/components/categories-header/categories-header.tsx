import Link from 'next/link'

import { LINKS } from '@/utils/config/links'

import { SelectCategories } from '../select/select'

import styles from './../../categories.module.scss'

export const CategoriesHeader: React.FC = () => {
  return (
    <div className={styles.categories__header}>
      <p>
        {' '}
        <Link href={LINKS.Home} prefetch>
          Головна
        </Link>{' '}
        /{' '}
        <Link href={LINKS.Categories + '/Всі'} prefetch>
          Категорії
        </Link>
      </p>
      <SelectCategories />
    </div>
  )
}
