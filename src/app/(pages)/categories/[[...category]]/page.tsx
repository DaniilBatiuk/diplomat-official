import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import styles from './categories.module.scss'
import { AsidePropertiesList } from './components/aside-properties-list/aside-properties-list'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { CategoriesList } from './components/categories-list/categories-list'
import { HeaderNav } from './components/header-nav/header-nav'
import { LoadingProducts } from './components/loading-products/loading-products'
import { LoadingProperties } from './components/loading-properties/loading-properties'
import { ProductList } from './components/product-list/product-list'
import { checkCorrectCategoryNameInUlr } from './helpers/check-correct-category-name-in-ulr'
import { metadataFactory } from '@/utils/helpers'
import {
  getActiveProducts,
  getActiveProductsByCategory,
  getActiveProductsBySubcategory,
  getCategories,
} from '@/utils/lib/queries'

export async function generateStaticParams() {
  const allCategories = await getCategories()

  const paths = [
    { category: [] },

    ...allCategories.map(category => ({
      category: [category.name],
    })),

    ...allCategories.flatMap(category =>
      category.subcategories.map(subcategory => ({
        category: [category.name, subcategory.name],
      })),
    ),
  ]

  return paths
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category?: string[] }>
}): Promise<Metadata> {
  const categoriesFromParam = (await params)?.category ?? []

  const paramsData = {
    category: categoriesFromParam[0] ? decodeURIComponent(categoriesFromParam[0]) : undefined,
    subcategory: categoriesFromParam[1] ? decodeURIComponent(categoriesFromParam[1]) : undefined,
  }

  const title = paramsData.subcategory
    ? `${paramsData.subcategory}`
    : paramsData.category
      ? `${paramsData.category}`
      : 'Категорії'

  return metadataFactory(title)
}

type Params = Promise<{ category?: string[] }>

export default async function Categories({ params }: { params: Params }) {
  const categoriesFromParam = (await params)?.category ?? []
  const allCategories = await getCategories()
  const paramsData = {
    category: categoriesFromParam[0] ? decodeURIComponent(categoriesFromParam[0]) : undefined,
    subcategory: categoriesFromParam[1] ? decodeURIComponent(categoriesFromParam[1]) : undefined,
  }

  const isCorrectCategoryAndSubCategoryInUrl = checkCorrectCategoryNameInUlr({
    paramsData,
    allCategories,
  })
  if (!isCorrectCategoryAndSubCategoryInUrl) notFound()

  const products = paramsData.subcategory
    ? await getActiveProductsBySubcategory(paramsData.subcategory)
    : paramsData.category
      ? await getActiveProductsByCategory(paramsData.category)
      : await getActiveProducts()

  return (
    <div className={styles.categories}>
      <HeaderNav allCategories={allCategories} products={products} />
      <div className={styles.categories__container}>
        <CategoriesHeader paramsData={paramsData} />
        <div className={styles.categories__content}>
          <aside className={styles.aside}>
            <CategoriesList paramsData={paramsData} allCategories={allCategories} />
            <Suspense fallback={<LoadingProperties />}>
              <AsidePropertiesList products={products} />
            </Suspense>
          </aside>
          <Suspense fallback={<LoadingProducts />}>
            <ProductList products={products} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
