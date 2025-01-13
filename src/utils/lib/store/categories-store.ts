import { create } from 'zustand'

interface CategoryState {
  allCategories: IBaseCategory[]
  setAllCategories: (categories: IBaseCategory[]) => void
}

export const useAllCategoriesStore = create<CategoryState>(set => ({
  allCategories: [],
  setAllCategories: allCategories => set({ allCategories }),
}))
