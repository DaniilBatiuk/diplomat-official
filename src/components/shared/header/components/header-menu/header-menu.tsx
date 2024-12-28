import clsx from 'clsx'
import { useState } from 'react'

import { DarkBackground } from '@/components/shared/dark-background/dark-background'

import { ICONS } from '@/utils/config/icons'

import { MenuCategories } from './components/menu-categories/menu-categories'
import styles from './header-menu.module.scss'

interface HeaderMenuProp {
  menuActive: boolean
  menuOpen: () => void
}
export const HeaderMenu: React.FC<HeaderMenuProp> = ({ menuActive, menuOpen }: HeaderMenuProp) => {
  const [activeMenuCategories, setActiveMenuCategories] = useState(false)
  return (
    <>
      <DarkBackground
        backgroundActive={menuActive}
        onClick={() => {
          menuOpen()
          setActiveMenuCategories(false)
        }}
      />
      <MenuCategories
        activeMenuCategories={activeMenuCategories}
        setActiveMenuCategories={setActiveMenuCategories}
      />
      <div
        className={clsx(styles.menu_open, {
          [styles.active]: menuActive,
        })}
      >
        {ICONS.close({ onClick: () => menuOpen() })}
        <nav className={styles.menu}>
          <ul>
            <li onClick={() => setActiveMenuCategories(true)}>
              <div className={styles.menu_item}>
                {ICONS.menuCategories()} <p>Категорії</p>
              </div>
              {ICONS.arrowRight()}
            </li>
            <li className={styles.menu_red}>
              <div className={styles.menu_item}>
                {ICONS.menuSales()} <p>Знижка</p>
              </div>
            </li>
            <li>
              <div className={styles.menu_item}>
                {ICONS.menuAboutUs()} <p>Про нас</p>
              </div>
            </li>
            <li>
              <div className={styles.menu_item}>
                {ICONS.menuPayment()} <p>Оплата</p>
              </div>
            </li>
            <li>
              <div className={styles.menu_item}>
                {ICONS.menuDelivery()} <p>Доставка</p>
              </div>
            </li>
            <li>
              <div className={styles.menu_item}>
                {ICONS.menuReturnProduct()} <p>Повернення товару</p>
              </div>
            </li>
            <li>
              <div className={styles.menu_item}>
                {ICONS.menuPolicy()} <p>Політика конфіденційності</p>
              </div>
            </li>
            <li>
              <div className={styles.menu_item}>
                {ICONS.menuRules()} <p>Правила та умови</p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
