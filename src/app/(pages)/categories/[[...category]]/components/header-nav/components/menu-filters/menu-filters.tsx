import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { COLORS, COUNTRIES, MATERIAL } from '@/utils/config/data'
import { ICONS } from '@/utils/config/icons'

import { CheckBoxCategories } from '../../../aside/components/check-box/check-box'

import styles from './../../../../categories.module.scss'
import { DarkBackground } from '@/components'

interface MenuFiltersProp {
  setMenuFiltersActive: Dispatch<SetStateAction<boolean>>
  menuFiltersActive: boolean
}

export const MenuFilters: React.FC<MenuFiltersProp> = ({
  setMenuFiltersActive,
  menuFiltersActive,
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
        <div className={styles.aside__filter}>
          <h2>МАТЕРІАЛ</h2>
          <ul>
            {MATERIAL.map(material => (
              <li key={material}>
                <CheckBoxCategories material={material} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.aside__filter}>
          <h2>КРАЇНА ВИРОБНИК</h2>
          <ul>
            {COUNTRIES.map(material => (
              <li key={material}>
                <CheckBoxCategories material={material} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.aside__filter}>
          <h2>КОЛІР</h2>
          <ul>
            {COLORS.map(material => (
              <li key={material}>
                <CheckBoxCategories material={material} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
