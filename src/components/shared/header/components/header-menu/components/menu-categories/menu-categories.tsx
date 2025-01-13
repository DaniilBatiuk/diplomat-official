import { useSuspenseQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import styles from '../../header-menu.module.scss'

import { Link } from '@/components'
import { categoryApi } from '@/utils/modules'

interface HeaderMenuProp {
  setMenuCategoriesActive: Dispatch<SetStateAction<boolean>>
  menuCategoriesActive: boolean
  closeMenu: () => void
}
export const MenuCategories: React.FC<HeaderMenuProp> = ({
  setMenuCategoriesActive,
  menuCategoriesActive,
  closeMenu,
}: HeaderMenuProp) => {
  const { data: categories } = useSuspenseQuery({
    queryKey: ['all-categories'],
    queryFn: meta => categoryApi.getAllCategories(meta),
  })

  console.log('data', categories)

  return (
    <div
      className={clsx(styles.menu_open, styles.menu_categories, {
        [styles.active]: menuCategoriesActive,
      })}
    >
      {ICONS.arrowLeft({ onClick: () => setMenuCategoriesActive(false) })}
      <nav className={styles.menu}>
        <ul>
          {categories.map((category, index) => (
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
