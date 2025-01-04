'use client'

import { useState } from 'react'

import { MenuCategories } from '@/components/shared/header/components/header-menu/components/menu-categories/menu-categories'

import { ICONS } from '@/utils/config/icons'

import styles from './../../categories.module.scss'
import { DarkBackground } from '@/components'

export const HeaderNav: React.FC = () => {
  const [activeMenuCategories, setActiveMenuCategories] = useState(false)

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
      <div className={styles.categories__nav}>
        <div className={styles.categories__nav_item} onClick={() => setActiveMenuCategories(true)}>
          {ICONS.categories()} <p>Категорії</p>
        </div>
        <div className={styles.categories__nav_item}>
          {ICONS.sort()} <p>Сортування</p>
        </div>
        <div className={styles.categories__nav_item}>
          {ICONS.filter()} <p>Фільтр</p>
        </div>
      </div>
    </>
  )
}
