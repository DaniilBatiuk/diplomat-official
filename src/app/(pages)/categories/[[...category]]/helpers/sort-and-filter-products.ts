import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export const useSortAndFilterProducts = (products: IProductBaseWithProperties[]) => {
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

    const filteredProducts = products.filter(product => {
      return Object.entries(searchParamsObj).every(([key, values]) => {
        if (key === 'SortBy') return true
        return values.some(val =>
          product.properties.some(prop => prop.name === key && prop.value === val),
        )
      })
    })

    return filteredProducts.toSorted((a, b) => {
      if (searchParamsObj.SortBy?.includes('Дешеві')) return a.price - b.price
      if (searchParamsObj.SortBy?.includes('Дорогі')) return b.price - a.price
      if (searchParamsObj.SortBy?.includes('Знижки')) {
        const aDiscount = a.discountPercent ?? 0
        const bDiscount = b.discountPercent ?? 0

        if (aDiscount === 0 && bDiscount > 0) return 1
        if (aDiscount > 0 && bDiscount === 0) return -1

        return bDiscount - aDiscount
      }
      return 0
    })
  }, [products, searchParamsObj, isSearchParamsEmpty])

  return sortedAndFilteredProducts
}
