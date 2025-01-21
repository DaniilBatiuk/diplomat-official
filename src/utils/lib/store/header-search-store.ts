import { create } from 'zustand'

interface HeaderSearchState {
  searchValue: string
  searchActive: boolean
  searchMobileActive: boolean
  searchDataView: ISearchData

  setSearchValue: (searchValue: string) => void
  setSearchActive: (searchActive: boolean) => void
  setSearchMobileActive: (searchMobileActive: boolean) => void
  setSearchDataView: (searchDataView: ISearchData) => void
}
export const useHeaderSearchStore = create<HeaderSearchState>(set => ({
  searchValue: '',
  searchActive: false,
  searchMobileActive: false,
  searchDataView: {
    categories: [],
    subcategories: [],
    products: [],
  } as ISearchData,

  setSearchValue: (searchValue: string) => set({ searchValue }),
  setSearchActive: (searchActive: boolean) => set({ searchActive }),
  setSearchMobileActive: (searchMobileActive: boolean) => set({ searchMobileActive }),
  setSearchDataView: (searchDataView: ISearchData) => set({ searchDataView }),
}))
