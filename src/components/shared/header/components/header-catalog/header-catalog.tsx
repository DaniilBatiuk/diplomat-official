'use client'

import clsx from 'clsx'
import { Dispatch, SetStateAction, useState } from 'react'

import { DarkBackground } from '@/components/shared/dark-background/dark-background'

import { ICONS } from '@/utils/config/icons'

import { CategoriesColumns } from './components/categories-columns/categories-columns'
import styles from './header-catalog.module.scss'
import { useCategories } from '@/components'

interface CatalogProp {
  catalogActive: boolean
  setCatalogActive: Dispatch<SetStateAction<boolean>>
}
export const Catalog: React.FC<CatalogProp> = ({
  catalogActive,
  setCatalogActive,
}: CatalogProp) => {
  const categories = useCategories()
  const [selectedCategory, setSelectedCategory] = useState<IBaseCategory>(categories[0])

  return (
    <>
      <div
        className={clsx(styles.catalog, {
          [styles.active]: catalogActive,
        })}
        onClick={() => setCatalogActive(false)}
      >
        <div className={styles.body} onClick={e => e.stopPropagation()}>
          <div className={clsx(styles.body__column, styles.body__column_categories)}>
            <div className={styles.body__column_list_categories}>
              {categories.map(category => (
                <div
                  onMouseEnter={() => setSelectedCategory(category)}
                  className={clsx(styles.body__column_list_categories_item, {
                    [styles.active]: category.id === selectedCategory.id,
                  })}
                  key={category.id}
                >
                  <p>{category.name}</p> {ICONS.arrowRight()}
                </div>
              ))}
            </div>
          </div>

          <CategoriesColumns
            selectedCategory={selectedCategory}
            setCatalogActive={setCatalogActive}
          />
        </div>
      </div>

      <DarkBackground
        backgroundActive={catalogActive}
        isLow
        onClick={() => setCatalogActive(false)}
      />
    </>
  )
}
