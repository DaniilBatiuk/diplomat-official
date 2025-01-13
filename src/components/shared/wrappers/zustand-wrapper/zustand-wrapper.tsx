'use client'

import { useAllCategoriesStore } from '@/utils/lib/store/categories-store'

interface ZustandWrapperProps {
  children: React.ReactNode
  allCategories: IBaseCategory[]
}

export const ZustandWrapper: React.FC<ZustandWrapperProps> = ({
  children,
  allCategories,
}: ZustandWrapperProps) => {
  const setAllCategories = useAllCategoriesStore(state => state.setAllCategories)
  setAllCategories(allCategories)

  return <>{children}</>
}
