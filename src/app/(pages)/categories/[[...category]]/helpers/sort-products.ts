import { calculateRoundedPrice } from '@/utils/helpers'

interface ISortProducts {
  products: IProductWithProperties[]
  searchParamsObj: { [key: string]: string[] }
}

export const sortProducts = ({ products, searchParamsObj }: ISortProducts) => {
  return products.toSorted((a, b) => {
    if (searchParamsObj.SortBy?.includes('Дешеві'))
      return (
        calculateRoundedPrice(a.price, a.discountPercent) -
        calculateRoundedPrice(b.price, b.discountPercent)
      )
    if (searchParamsObj.SortBy?.includes('Дорогі'))
      return (
        calculateRoundedPrice(b.price, b.discountPercent) -
        calculateRoundedPrice(a.price, a.discountPercent)
      )
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
