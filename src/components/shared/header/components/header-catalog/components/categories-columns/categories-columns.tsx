'use client'

import { Dispatch, SetStateAction } from 'react'

import { CategoriesColumn } from '../categories-column/categories-column'

interface CategoriesColumnsProps {
  selectedCategory: ICategory
  setCatalogActive: Dispatch<SetStateAction<boolean>>
}

export const CategoriesColumns: React.FC<CategoriesColumnsProps> = ({
  selectedCategory,
  setCatalogActive,
}: CategoriesColumnsProps) => {
  return (
    <>
      {selectedCategory.subcategories.map(subcategory => (
        <CategoriesColumn
          setCatalogActive={setCatalogActive}
          subcategory={subcategory}
          selectedCategoryName={selectedCategory.name}
        />
      ))}
    </>
  )
}
