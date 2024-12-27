'use client'

import Logo from '@../../public/logo.png'
import { Badge } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { DarkBackground } from '../dark-background/dark-background'

import { HeaderButton } from './components/header-botton/header-button'
import { HeaderMenu } from './components/header-menu/header-menu'
import { HeaderSearch } from './components/header-search/header-search'
import { SearchMobile } from './components/search-mobile/search-mobile'
import styles from './header.module.scss'
import { useRerender } from '@/utils/hooks'

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [searchMobileActive, setSearchMobileActive] = useState(false)
  const inputRefMobile = useRef<null | HTMLInputElement>(null)
  const inputRef = useRef<null | HTMLInputElement>(null)
  const [searchValue, setSearchValue] = useState('')
  const rerender = useRerender()

  return (
    <>
      <DarkBackground
        backgroundActive={
          inputRef.current && inputRef.current === document.activeElement && searchValue.length > 0
            ? true
            : false
        }
        isLow
        onClick={rerender.update}
      />
      <HeaderMenu menuActive={menuActive} menuOpen={() => setMenuActive(false)} />
      <SearchMobile
        searchMobileActive={searchMobileActive}
        searchMobileClose={() => setSearchMobileActive(false)}
        inputRefMobile={inputRefMobile}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__burger_logo}>
            <div className={styles.header__burger} onClick={() => setMenuActive(true)}>
              {ICONS.burger()}
            </div>

            <Link href={LINKS.Home}>
              <Image src={Logo} alt='logo' width={124} height={37} />
            </Link>
          </div>

          <div className={styles.header__search_categories}>
            <HeaderButton>
              {ICONS.categories()} <p>Каталог</p> {ICONS.arrowDown()}
            </HeaderButton>
            <HeaderSearch
              rerender={rerender}
              inputRef={inputRef}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <nav>
            <ul>
              <li
                onClick={() => {
                  setSearchMobileActive(true)
                  if (inputRefMobile.current) inputRefMobile.current.focus()
                }}
              >
                {ICONS.search()}
              </li>
              <li>{ICONS.contacts()}</li>
              <li>
                <Link href={LINKS.SignIn}>{ICONS.user()}</Link>
              </li>
              <li>
                <Badge badgeContent={1} color='error' showZero max={9} style={{ padding: 0 }}>
                  {ICONS.cart()}
                </Badge>
                <p>2 241 ₴</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
