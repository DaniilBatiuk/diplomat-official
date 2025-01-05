'use client'

import { useState } from 'react'

import { MenuCategories } from '@/components/shared/header/components/header-menu/components/menu-categories/menu-categories'

import { ICONS } from '@/utils/config/icons'

import styles from './../../categories.module.scss'
import { MenuFilters } from './components/menu-filters/menu-filters'
import { DarkBackground, MenuSort } from '@/components'

export const HeaderNav: React.FC = () => {
  const [activeMenuCategories, setActiveMenuCategories] = useState(false)
  const [activeMenuFilters, setActiveMenuFilters] = useState(false)
  const [activeMenuSort, setActiveMenuSort] = useState(false)

  return (
    <>
      <DarkBackground
        backgroundActive={activeMenuCategories}
        onClick={() => setActiveMenuCategories(false)}
      />
      <MenuCategories
        closeMenu={() => setActiveMenuCategories(false)}
        activeMenuCategories={activeMenuCategories}
        setActiveMenuCategories={setActiveMenuCategories}
      />
      <MenuFilters
        activeMenuFilters={activeMenuFilters}
        setActiveMenuFilters={setActiveMenuFilters}
      />
      <MenuSort activeMenuSort={activeMenuSort} setActiveMenuSort={setActiveMenuSort} />
      <div className={styles.categories__nav}>
        <div className={styles.categories__nav_item} onClick={() => setActiveMenuCategories(true)}>
          {ICONS.categories()} <p>Категорії</p>
        </div>
        <div className={styles.categories__nav_item} onClick={() => setActiveMenuSort(true)}>
          {ICONS.sort()} <p>Сортування</p>
        </div>
        <div className={styles.categories__nav_item} onClick={() => setActiveMenuFilters(true)}>
          {ICONS.filter()} <p>Фільтр</p>
        </div>
      </div>
    </>
  )
}
