import { create } from 'zustand'

interface HeaderSearchState {
  searchValue: string
  setSearchValue: (searchValue: string) => void
  searchActive: boolean
  setSearchActive: (searchActive: boolean) => void
  searchMobileActive: boolean
  setSearchMobileActive: (searchMobileActive: boolean) => void
  searchDataView: ISearchData
  setSearchDataView: (searchDataView: ISearchData) => void
}
export const useHeaderSearchStore = create<HeaderSearchState>(set => ({
  searchValue: '',
  setSearchValue: (searchValue: string) => set({ searchValue }),

  searchActive: false,
  setSearchActive: (searchActive: boolean) => set({ searchActive }),

  searchMobileActive: false,
  setSearchMobileActive: (searchMobileActive: boolean) => set({ searchMobileActive }),

  searchDataView: {
    categories: [],
    subcategories: [],
    products: [],
  } as ISearchData,
  setSearchDataView: (searchDataView: ISearchData) => set({ searchDataView }),
}))
