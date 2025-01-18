import { notFound } from 'next/navigation'

import styles from './categories.module.scss'
import { AsidePropertiesList } from './components/aside-properties-list/aside-properties-list'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { CategoriesList } from './components/categories-list/categories-list'
import { HeaderNav } from './components/header-nav/header-nav'
import { ProductList } from './components/product-list/product-list'
import { CheckCorrectCategoryNameInUlr } from './helpers/check-correct-category-name-in-ulr'
import { GroupByProperties } from './helpers/group-by-properties'
import { SortAndFilterProducts } from './helpers/sort-and-filter-products'
import {
  getActiveProducts,
  getActiveProductsByCategory,
  getActiveProductsBySubcategory,
  getCategories,
} from '@/utils/lib/queries'

// export async function generateStaticParams() {
//   const categories = await prisma.category.findMany({
//     include: {
//       subcategories: true,
//     },
//   })

//   const paths = [
//     { category: [] },

//     ...categories.map(category => ({
//       category: [category.name],
//     })),

//     ...categories.flatMap(category =>
//       category.subcategories.map(subcategory => ({
//         category: [category.name, subcategory.name],
//       })),
//     ),
//   ]

//   return paths
// }

type Params = Promise<{ category?: string[] }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Categories({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const categoriesFromParam = (await params)?.category ?? []
  const allCategories = await getCategories()
  const searchParamsObj = await searchParams
  const paramsData = {
    category: categoriesFromParam[0] ? decodeURIComponent(categoriesFromParam[0]) : undefined,
    subcategory: categoriesFromParam[1] ? decodeURIComponent(categoriesFromParam[1]) : undefined,
  }

  const isCorrectCategoryAndSubCategoryInUrl = CheckCorrectCategoryNameInUlr({
    paramsData,
    allCategories,
  })
  if (!isCorrectCategoryAndSubCategoryInUrl) notFound()

  const isSearchParamsEmpty = JSON.stringify(searchParamsObj) === '{}'

  const products = paramsData.subcategory
    ? await getActiveProductsBySubcategory(paramsData.subcategory)
    : paramsData.category
      ? await getActiveProductsByCategory(paramsData.category)
      : await getActiveProducts()

  const sortedAndFilteredProducts = SortAndFilterProducts({
    products,
    searchParamsObj,
    isSearchParamsEmpty,
  })

  const propertiesGroupedByName = GroupByProperties(products)

  return (
    <div className={styles.categories}>
      <HeaderNav allCategories={allCategories} propertiesGroupedByName={propertiesGroupedByName} />
      <div className={styles.categories__container}>
        <CategoriesHeader paramsData={paramsData} />
        <div className={styles.categories__content}>
          <aside className={styles.aside}>
            <CategoriesList paramsData={paramsData} allCategories={allCategories} />
            <AsidePropertiesList propertiesGroupedByName={propertiesGroupedByName} />
          </aside>
          <ProductList products={sortedAndFilteredProducts} />
        </div>
      </div>
    </div>
  )
}
