import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import { sortProducts } from '../helpers/sort-products'

export const useSortAndFilterProducts = (products: IProductWithProperties[]) => {
  const searchParams = useSearchParams()

  const searchParamsObj = useMemo(() => {
    const params: { [key: string]: string[] } = {}
    searchParams.forEach((value, key) => {
      params[key] = value.split(',')
    })
    return params
  }, [searchParams])

  const isSearchParamsEmpty = useMemo(
    () => Object.keys(searchParamsObj).length === 0,
    [searchParamsObj],
  )

  const sortedAndFilteredProducts = useMemo(() => {
    if (isSearchParamsEmpty) {
      return products
    }

    if (searchParamsObj.Search) {
      const filteredProductsBySearch = products.filter(product =>
        product.name.toLocaleLowerCase().includes(searchParamsObj.Search[0].toLocaleLowerCase()),
      )

      return sortProducts({
        products: filteredProductsBySearch,
        searchParamsObj,
      })
    }

    const filteredProducts = products.filter(product => {
      return Object.entries(searchParamsObj).every(([key, values]) => {
        if (key === 'SortBy') return true
        if (key === 'Search') return true
        return values.some(val =>
          product.properties.some(prop => prop.name === key && prop.value === val),
        )
      })
    })

    return sortProducts({
      products: filteredProducts,
      searchParamsObj,
    })
  }, [products, searchParamsObj, isSearchParamsEmpty])

  return sortedAndFilteredProducts
}
