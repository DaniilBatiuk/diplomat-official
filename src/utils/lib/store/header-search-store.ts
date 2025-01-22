import { create } from 'zustand'

interface HeaderSearchState {
  searchDataView: ISearchData
  searchValue: string
  searchActive: boolean
  searchMobileActive: boolean
  menuActive: boolean
  signInActive: boolean
  basketActive: boolean

  setSearchDataView: (searchDataView: ISearchData) => void
  setSearchValue: (searchValue: string) => void
  setSearchActive: (searchActive: boolean) => void
  setSearchMobileActive: (searchMobileActive: boolean) => void
  setMenuActive: (menuActive: boolean) => void
  setSignInActive: (signInActive: boolean) => void
  setBasketActive: (basketActive: boolean) => void
}

export const useHeaderSearchStore = create<HeaderSearchState>(set => ({
  searchDataView: {
    categories: [],
    subcategories: [],
    products: [],
  } as ISearchData,
  searchValue: '',
  searchActive: false,
  searchMobileActive: false,
  menuActive: false,
  signInActive: false,
  basketActive: false,

  setSearchDataView: (searchDataView: ISearchData) => set({ searchDataView }),
  setSearchValue: (searchValue: string) => set({ searchValue }),
  setSearchActive: (searchActive: boolean) => set({ searchActive }),
  setSearchMobileActive: (searchMobileActive: boolean) => set({ searchMobileActive }),
  setMenuActive: (menuActive: boolean) => set({ menuActive }),
  setSignInActive: (signInActive: boolean) => set({ signInActive }),
  setBasketActive: (basketActive: boolean) => set({ basketActive }),
}))
