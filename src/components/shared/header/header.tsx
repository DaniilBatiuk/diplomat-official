'use client'

import { Badge } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { ICONS } from '@/utils/config/icons'
import { LINKS } from '@/utils/config/links'

import { Basket } from '../basket/basket'
import { DarkBackground } from '../dark-background/dark-background'
import { SignIn } from '../sign-in/sign-in'

import { HeaderButton } from './components/header-button/header-button'
import { Catalog } from './components/header-catalog/header-catalog'
import { HeaderContactsPopUp } from './components/header-contacts-popup/header-contacts-popup'
import { HeaderMenu } from './components/header-menu/header-menu'
import { HeaderSearch } from './components/header-search/header-search'
import { SearchMobile } from './components/search-mobile/search-mobile'
import styles from './header.module.scss'
import Logo from '@/../public/logo.png'
import { Link } from '@/components'
import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface HeaderProps {
  allCategories: IBaseCategory[]
  searchData: ISearchData
}

export const Header: React.FC<HeaderProps> = ({ allCategories, searchData }: HeaderProps) => {
  const [menuActive, setMenuActive] = useState(false)
  const [signInActive, setSignInActive] = useState(false)
  const [basketActive, setBasketActive] = useState(false)
  const [catalogActive, setCatalogActive] = useState(false)

  const inputRefMobile = useRef<null | HTMLInputElement>(null)
  const inputRefSearch = useRef<null | HTMLInputElement>(null)

  const pathname = usePathname()

  const {
    searchValue,
    setSearchValue,
    searchActive,
    setSearchActive,
    searchMobileActive,
    setSearchMobileActive,
    setSearchDataView,
    searchDataView,
  } = useHeaderSearchStore()

  const handleHeaderClosePopUp = () => {
    if (catalogActive) {
      setCatalogActive(false)
    } else if (
      searchActive &&
      inputRefSearch.current &&
      inputRefSearch.current !== document.activeElement &&
      searchValue.length > 0
    ) {
      setSearchActive(false)
    }
  }

  useEffect(() => {
    if (pathname !== '/categories') {
      setSearchValue('')
    }
  }, [pathname])

  useEffect(() => {
    setSearchDataView({
      categories: searchData.categories.filter(category =>
        category.name.toLowerCase().startsWith(searchValue.toLowerCase()),
      ),
      subcategories: searchData.subcategories.filter(subcategory =>
        subcategory.name.toLowerCase().startsWith(searchValue.toLowerCase()),
      ),
      products: searchData.products.filter(product =>
        product.name.toLowerCase().startsWith(searchValue.toLowerCase()),
      ),
    })
  }, [searchValue, searchData])

  return (
    <>
      <DarkBackground
        backgroundActive={
          searchActive &&
          !searchMobileActive &&
          searchValue.length > 0 &&
          (searchDataView.categories.length > 0 ||
            searchDataView.products.length > 0 ||
            searchDataView.subcategories.length > 0)
        }
        isLow
        onClick={() => setSearchActive(false)}
      />
      <Catalog
        catalogActive={catalogActive}
        setCatalogActive={setCatalogActive}
        allCategories={allCategories}
      />
      <HeaderMenu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        allCategories={allCategories}
      />
      <Basket basketActive={basketActive} setBasketActive={setBasketActive} />
      <SearchMobile inputRefMobile={inputRefMobile} />
      {signInActive && <SignIn onClickClose={() => setSignInActive(false)} />}
      <header className={styles.header} onClick={handleHeaderClosePopUp}>
        <div className={styles.header__container}>
          <div className={styles.header__burger_logo}>
            <div className={styles.header__burger} onClick={() => setMenuActive(true)}>
              {ICONS.burger()}
            </div>

            <Link href={LINKS.Home}>
              <Image src={Logo} alt='MainPhoto' loading={'eager'} decoding='sync' quality={100} />
            </Link>
          </div>

          <div className={styles.header__search_categories}>
            <HeaderButton onClick={() => setCatalogActive(prev => !prev)}>
              {ICONS.categories()} <p>Каталог</p>
              {ICONS.arrowDown({
                className: clsx(styles.header_arrow, { [styles.header_arrow_down]: catalogActive }),
              })}
            </HeaderButton>
            <HeaderSearch inputRef={inputRefSearch} />
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
              <HeaderContactsPopUp />

              <li className={styles.admin}>
                <Link href={LINKS.Admin} prefetch>
                  {ICONS.admin()}
                </Link>
              </li>

              <li onClick={() => setSignInActive(true)}>{ICONS.user()}</li>
              <li onClick={() => setBasketActive(true)}>
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
