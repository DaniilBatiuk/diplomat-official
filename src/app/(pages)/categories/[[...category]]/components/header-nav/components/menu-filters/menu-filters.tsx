import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import { AsidePropertiesList } from '../../../aside-properties-list/aside-properties-list'

import styles from './../../../../categories.module.scss'
import { DarkBackground } from '@/components'

interface MenuFiltersProp {
  setMenuFiltersActive: Dispatch<SetStateAction<boolean>>
  menuFiltersActive: boolean
  products: IProductBaseWithProperties[]
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
        <AsidePropertiesList products={products} />
      </div>
    </>
  )
}
