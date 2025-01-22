import { Dispatch, SetStateAction } from 'react'

import { Basket } from '@/components/shared/basket/basket'
import { DarkBackground } from '@/components/shared/dark-background/dark-background'
import { SignIn } from '@/components/shared/sign-in/sign-in'

import { Catalog } from '../header-catalog/header-catalog'
import { HeaderMenu } from '../header-menu/header-menu'
import { SearchMobile } from '../search-mobile/search-mobile'

import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface HeaderOverlayProps {
  inputRefMobile: React.RefObject<HTMLInputElement | null>
  setCatalogActive: Dispatch<SetStateAction<boolean>>
  catalogActive: boolean
  allCategories: IBaseCategory[]
}

export const HeaderOverlay: React.FC<HeaderOverlayProps> = ({
  inputRefMobile,
  catalogActive,
  setCatalogActive,
  allCategories,
}: HeaderOverlayProps) => {
  const {
    searchValue,
    searchActive,
    setSearchActive,
    searchMobileActive,
    searchDataView,
    menuActive,
    setMenuActive,
    basketActive,
    setBasketActive,
    setSignInActive,
    signInActive,
  } = useHeaderSearchStore()

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
    </>
  )
}
