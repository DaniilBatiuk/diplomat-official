import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { DarkBackground } from '@/components/shared/dark-background/dark-background'

import { ICONS } from '@/utils/config/icons'

import { CategoriesColumns } from './components/categories-columns/categories-columns'
import styles from './header-catalog.module.scss'

interface CatalogProp {
  catalogActive: boolean
  setCatalogActive: Dispatch<SetStateAction<boolean>>
}
export const Catalog: React.FC<CatalogProp> = ({
  catalogActive,
  setCatalogActive,
}: CatalogProp) => {
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
              <div className={styles.body__column_list_categories_item}>
                <p>Посуд</p> {ICONS.arrowRight()}
              </div>
              <div className={styles.body__column_list_categories_item}>
                <p>Планшет</p> {ICONS.arrowRight()}
              </div>
              <div className={styles.body__column_list_categories_item}>
                <p>Постільна білизна</p> {ICONS.arrowRight()}
              </div>
              <div className={styles.body__column_list_categories_item}>
                <p>Пуховик жіночій</p> {ICONS.arrowRight()}
              </div>
              <div className={styles.body__column_list_categories_item}>
                <p>Пуховик чоловічий</p> {ICONS.arrowRight()}
              </div>
            </div>
          </div>
          <CategoriesColumns />
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
