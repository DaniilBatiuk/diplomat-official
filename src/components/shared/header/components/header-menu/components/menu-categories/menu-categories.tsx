import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

import { CATEGORIES } from '@/utils/config/data'
import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from '../../header-menu.module.scss'

interface HeaderMenuProp {
  setActiveMenuCategories: Dispatch<SetStateAction<boolean>>
  activeMenuCategories: boolean
  closeMenu: () => void
}
export const MenuCategories: React.FC<HeaderMenuProp> = ({
  setActiveMenuCategories,
  activeMenuCategories,
  closeMenu,
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
          {CATEGORIES.map((category, index) => (
            <li key={index}>
              <Link
                className={styles.menu_item_with_arrow}
                href={LINKS.Categories + category.href}
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
