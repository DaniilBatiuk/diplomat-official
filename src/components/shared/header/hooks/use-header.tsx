import { usePathname } from 'next/navigation'
import { RefObject, useEffect, useState } from 'react'

import { useHeaderSearchStore } from '@/utils/lib/store/header-search-store'

interface IUseHeader {
  searchData: ISearchData
  inputRefSearch: RefObject<HTMLInputElement | null>
}

export const useHeader = ({ searchData, inputRefSearch }: IUseHeader) => {
  const [catalogActive, setCatalogActive] = useState(false)
  const pathname = usePathname()

  const { searchValue, setSearchValue, searchActive, setSearchActive, setSearchDataView } =
    useHeaderSearchStore()

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

  return { catalogActive, setCatalogActive, handleHeaderClosePopUp }
}
