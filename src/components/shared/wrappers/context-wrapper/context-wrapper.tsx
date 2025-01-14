'use client'

import { createContext, useContext } from 'react'

interface ContextWrapperProps {
  children: React.ReactNode
  allCategories: IBaseCategory[]
}

export const CategoriesContext = createContext<IBaseCategory[] | null>(null)

export const useCategories = () => {
  const context = useContext(CategoriesContext)
  if (!context) {
    throw new Error('useCategories must be used within CategoriesProvider')
  }
  return context
}

export const ContextWrapper: React.FC<ContextWrapperProps> = ({
  children,
  allCategories,
}: ContextWrapperProps) => {
  return <CategoriesContext.Provider value={allCategories}>{children}</CategoriesContext.Provider>
}
