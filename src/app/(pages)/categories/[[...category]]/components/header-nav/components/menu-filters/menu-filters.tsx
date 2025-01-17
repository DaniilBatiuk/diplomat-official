import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import { CheckBoxCategories } from '../../../aside/components/check-box/check-box'

import styles from './../../../../categories.module.scss'
import { DarkBackground } from '@/components'

interface MenuFiltersProp {
  setMenuFiltersActive: Dispatch<SetStateAction<boolean>>
  menuFiltersActive: boolean
  propertiesGroupedByName: Record<
    string,
    {
      name: string
      value: string
    }[]
  >
}

export const MenuFilters: React.FC<MenuFiltersProp> = ({
  setMenuFiltersActive,
  menuFiltersActive,
  propertiesGroupedByName,
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
        {Object.entries(propertiesGroupedByName).map(([key, value]) => (
          <div className={styles.aside__filter} key={key}>
            <h2>{key}</h2>
            <ul>
              {value.map(property => (
                <li key={property.value}>
                  <CheckBoxCategories value={property.value} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
