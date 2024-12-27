import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'

import styles from '../../header-menu.module.scss'

type HeaderMenuProp = {
  setActiveMenuCategories: Dispatch<SetStateAction<boolean>>
  activeMenuCategories: boolean
}
export const MenuCategories: React.FC<HeaderMenuProp> = ({
  setActiveMenuCategories,
  activeMenuCategories,
}: HeaderMenuProp) => {
  return (
    <div
      className={clsx(styles.menu_open, styles.menu_categories, {
        [styles.active]: activeMenuCategories,
      })}
    >
      {ICONS.arrowLeft({ onClick: () => setActiveMenuCategories(false) })}
      <nav className={styles.menu}>
        <ul>
          <li>
            <p>Посуд</p>
            {ICONS.arrowRight()}
          </li>
          <li>
            <p>Фігурки та статуетки</p>
            {ICONS.arrowRight()}
          </li>
          <li>
            <p>Годинники</p>
            {ICONS.arrowRight()}
          </li>
          <li>
            <p>Символи року</p>
            {ICONS.arrowRight()}
          </li>
          <li>
            <p>Інтер'єр та декор</p>
            {ICONS.arrowRight()}
          </li>
          <li>
            <p>Настільні ігри</p>
            {ICONS.arrowRight()}
          </li>
        </ul>
      </nav>
    </div>
  )
}
