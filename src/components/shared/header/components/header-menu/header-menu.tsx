import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import { DarkBackground } from '@/components/shared/dark-background/dark-background'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { MenuCategories } from './components/menu-categories/menu-categories'
import styles from './header-menu.module.scss'

interface HeaderMenuProp {
  menuActive: boolean
  menuOpen: () => void
}
export const HeaderMenu: React.FC<HeaderMenuProp> = ({ menuActive, menuOpen }: HeaderMenuProp) => {
  const [activeMenuCategories, setActiveMenuCategories] = useState(false)

  const closeMenu = () => {
    menuOpen()
    setActiveMenuCategories(false)
  }
  return (
    <>
      <DarkBackground backgroundActive={menuActive} onClick={closeMenu} />
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
              <Link href={LINKS.Payment} className={styles.menu_item} onClick={closeMenu} prefetch>
                {ICONS.menuPayment()} <p>Оплата</p>
              </Link>
            </li>
            <li>
              <Link href={LINKS.Delivery} className={styles.menu_item} onClick={closeMenu} prefetch>
                {ICONS.menuDelivery()} <p>Доставка</p>
              </Link>
            </li>
            <li>
              <Link
                href={LINKS.ReturnProduct}
                className={styles.menu_item}
                onClick={closeMenu}
                prefetch
              >
                {ICONS.menuReturnProduct()} <p>Повернення товару</p>
              </Link>
            </li>
            <li>
              <Link
                href={LINKS.PrivacyPolicy}
                className={styles.menu_item}
                onClick={closeMenu}
                prefetch
              >
                {ICONS.menuPolicy()} <p>Політика конфіденційності</p>
              </Link>
            </li>
            <li>
              <Link
                href={LINKS.RulesAndConditions}
                className={styles.menu_item}
                onClick={closeMenu}
              >
                {ICONS.menuRules()} <p>Правила та умови</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
