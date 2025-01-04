import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

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
          <li>
            <Link
              className={styles.menu_item_with_arrow}
              href={LINKS.Categories + '/Посуд'}
              prefetch
              onClick={closeMenu}
            >
              <p>Посуд</p>
              {ICONS.arrowRight()}
            </Link>
          </li>
          <li>
            <Link
              className={styles.menu_item_with_arrow}
              href={LINKS.Categories + '/Фігурки та статуетки'}
              prefetch
              onClick={closeMenu}
            >
              <p>Фігурки та статуетки</p>
              {ICONS.arrowRight()}
            </Link>
          </li>
          <li>
            <Link
              className={styles.menu_item_with_arrow}
              href={LINKS.Categories + '/Годинники'}
              prefetch
              onClick={closeMenu}
            >
              <p>Годинники</p>
              {ICONS.arrowRight()}
            </Link>
          </li>
          <li>
            <Link
              className={styles.menu_item_with_arrow}
              href={LINKS.Categories + '/Символи року'}
              prefetch
              onClick={closeMenu}
            >
              <p>Символи року</p>
              {ICONS.arrowRight()}
            </Link>
          </li>
          <li>
            <Link
              className={styles.menu_item_with_arrow}
              href={LINKS.Categories + "/Інтер'єр та декор"}
              prefetch
              onClick={closeMenu}
            >
              <p>Інтер'єр та декор</p>
              {ICONS.arrowRight()}
            </Link>
          </li>
          <li>
            <Link
              className={styles.menu_item_with_arrow}
              href={LINKS.Categories + '/Настільні ігри'}
              prefetch
              onClick={closeMenu}
            >
              <p>Настільні ігри</p>
              {ICONS.arrowRight()}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
