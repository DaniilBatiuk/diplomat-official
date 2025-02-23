import clsx from 'clsx'
import { Dispatch, SetStateAction, Suspense } from 'react'

import { ICONS } from '@/utils/constants'

import { AsidePropertiesList } from '../../../aside-properties-list/aside-properties-list'

import styles from './../../../../categories.module.scss'
import { DarkBackground } from '@/components'

interface MenuFiltersProp {
  setMenuFiltersActive: Dispatch<SetStateAction<boolean>>
  menuFiltersActive: boolean
  products: IProductWithProperties[]
}

export const MenuFilters: React.FC<MenuFiltersProp> = ({
  setMenuFiltersActive,
  menuFiltersActive,
  products,
}: MenuFiltersProp) => {
  return (
    <>
      <DarkBackground
        backgroundActive={menuFiltersActive}
        onClick={() => setMenuFiltersActive(false)}
      />
      <div
        className={clsx(styles.menu_open, styles.menu_categories, {
          [styles.active]: menuFiltersActive,
        })}
      >
        {ICONS.arrowLeft({ onClick: () => setMenuFiltersActive(false) })}
        <Suspense>
          <AsidePropertiesList products={products} />
        </Suspense>
      </div>
    </>
  )
}
