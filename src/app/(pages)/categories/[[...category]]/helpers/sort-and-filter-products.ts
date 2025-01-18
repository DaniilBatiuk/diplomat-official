interface ISortAndFilterProducts {
  products: IProductBaseWithProperties[]
  searchParamsObj: { [key: string]: string | string[] | undefined }
  isSearchParamsEmpty: boolean
}

export const SortAndFilterProducts = ({
  products,
  searchParamsObj,
  isSearchParamsEmpty,
}: ISortAndFilterProducts) => {
  const filteredProducts = products.filter(product => {
    if (isSearchParamsEmpty) return true

    return Object.entries(searchParamsObj).every(([key, value]) => {
      if (key === 'SortBy') return true
      const values = typeof value === 'string' ? value.split(',') : [value]
      return values.some(val =>
        product.properties.some(prop => prop.name === key && prop.value === val),
      )
    })
  })

  const sortedAndFilteredProducts = filteredProducts.toSorted((a, b) => {
    if (searchParamsObj.SortBy === 'Дешеві') return a.price - b.price
    if (searchParamsObj.SortBy === 'Дорогі') return b.price - a.price
    if (searchParamsObj.SortBy === 'Знижки') {
      const aDiscount = a.discountPercent ?? 0
      const bDiscount = b.discountPercent ?? 0

      if (aDiscount === 0 && bDiscount > 0) return 1
      if (aDiscount > 0 && bDiscount === 0) return -1

      return bDiscount - aDiscount
    }
    return 0
  })

  return sortedAndFilteredProducts
}
