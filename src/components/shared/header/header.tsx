'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRef } from 'react'

import { ICONS, LINKS } from '@/utils/constants'

import { HeaderButton } from './components/header-button/header-button'
import { HeaderNav } from './components/header-nav/header-nav'
import { HeaderOverlay } from './components/header-overlay/header-overlay'
import { HeaderSearch } from './components/header-search/header-search'
import styles from './header.module.scss'
import { useHeader } from './hooks/use-header'
import Logo from '@/../public/logo.png'
import { Link } from '@/components'
import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface HeaderProps {
  allCategories: ICategory[]
  searchData: ISearchData
}

export const Header: React.FC<HeaderProps> = ({ allCategories, searchData }: HeaderProps) => {
  const inputRefMobile = useRef<null | HTMLInputElement>(null)
  const inputRefSearch = useRef<null | HTMLInputElement>(null)

  const { setMenuActive } = useHeaderSearchStore()

  const { catalogActive, setCatalogActive, handleHeaderClosePopUp } = useHeader({
    searchData,
    inputRefSearch,
  })

  return (
    <>
      <HeaderOverlay
        allCategories={allCategories}
        catalogActive={catalogActive}
        inputRefMobile={inputRefMobile}
        setCatalogActive={setCatalogActive}
      />
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
          <HeaderNav inputRefMobile={inputRefMobile} />
        </div>
      </header>
    </>
  )
}
