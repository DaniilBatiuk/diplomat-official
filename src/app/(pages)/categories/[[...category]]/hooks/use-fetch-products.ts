import {
  getActiveProducts,
  getActiveProductsByCategory,
  getActiveProductsBySubcategory,
} from '@/utils/lib/queries'

interface useProcessProductsProps {
  paramsData: {
    category: string | undefined
    subcategory: string | undefined
  }
}

export const useFetchProducts = async ({ paramsData }: useProcessProductsProps) => {
  const products = paramsData.subcategory
    ? await getActiveProductsBySubcategory(paramsData.subcategory)
    : paramsData.category
      ? await getActiveProductsByCategory(paramsData.category)
      : await getActiveProducts()

  return { products }
}
