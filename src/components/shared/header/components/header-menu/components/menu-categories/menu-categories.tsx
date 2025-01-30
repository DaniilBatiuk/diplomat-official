import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

import { ICONS, LINKS } from '@/utils/constants'

import styles from '../../header-menu.module.scss'

interface HeaderMenuProp {
  setMenuCategoriesActive: Dispatch<SetStateAction<boolean>>
  menuCategoriesActive: boolean
  closeMenu: () => void
  allCategories: ICategory[]
}
export const MenuCategories: React.FC<HeaderMenuProp> = ({
  setMenuCategoriesActive,
  menuCategoriesActive,
  allCategories,
  closeMenu,
}: HeaderMenuProp) => {
  return (
    <div
      className={clsx(styles.menu_open, styles.menu_categories, {
        [styles.active]: menuCategoriesActive,
      })}
    >
      {ICONS.arrowLeft({ onClick: () => setMenuCategoriesActive(false) })}
      <nav className={styles.menu}>
        <ul>
          {allCategories.map((category, index) => (
            <li key={index}>
              <Link
                className={styles.menu_item_with_arrow}
                href={LINKS.Categories + '/' + category.name}
                prefetch
                onClick={closeMenu}
              >
                <p>{category.name}</p>
                {ICONS.arrowRight()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
