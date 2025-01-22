interface IFilterProducts {
  products: IProductWithProperties[]
  searchParamsObj: { [key: string]: string[] }
}

export const filterProducts = ({ products, searchParamsObj }: IFilterProducts) => {
  return products.toSorted((a, b) => {
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
}
