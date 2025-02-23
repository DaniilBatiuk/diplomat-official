'use client'

import { Suspense, useState } from 'react'

import { MenuCategories } from '@/components/shared/header/components/header-menu/components/menu-categories/menu-categories'

import { ICONS } from '@/utils/constants'

import styles from './../../categories.module.scss'
import { MenuFilters } from './components/menu-filters/menu-filters'
import { DarkBackground, MenuSort } from '@/components'

interface HeaderNavProps {
  allCategories: ICategory[]
  products: IProductWithProperties[]
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  allCategories,
  products,
}: HeaderNavProps) => {
  const [menuCategoriesActive, setMenuCategoriesActive] = useState(false)
  const [menuFiltersActive, setMenuFiltersActive] = useState(false)
  const [menuSortActive, setMenuSortActive] = useState(false)

  return (
    <>
      <DarkBackground
        backgroundActive={menuCategoriesActive}
        onClick={() => setMenuCategoriesActive(false)}
      />
      <MenuCategories
        allCategories={allCategories}
        closeMenu={() => setMenuCategoriesActive(false)}
        menuCategoriesActive={menuCategoriesActive}
        setMenuCategoriesActive={setMenuCategoriesActive}
      />
      <MenuFilters
        menuFiltersActive={menuFiltersActive}
        setMenuFiltersActive={setMenuFiltersActive}
        products={products}
      />
      <Suspense>
        <MenuSort menuSortActive={menuSortActive} setMenuSortActive={setMenuSortActive} />
      </Suspense>
      <div className={styles.categories__nav}>
        <div className={styles.categories__nav_item} onClick={() => setMenuCategoriesActive(true)}>
          {ICONS.categories()} <p>Категорії</p>
        </div>
        <div className={styles.categories__nav_item} onClick={() => setMenuSortActive(true)}>
          {ICONS.sort()} <p>Сортування</p>
        </div>
        <div className={styles.categories__nav_item} onClick={() => setMenuFiltersActive(true)}>
          {ICONS.filter()} <p>Фільтр</p>
        </div>
      </div>
    </>
  )
}
