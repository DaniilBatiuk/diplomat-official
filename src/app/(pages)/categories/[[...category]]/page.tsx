import styles from './categories.module.scss'
import { AsidePropertiesList } from './components/aside-properties-list/aside-properties-list'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { CategoriesList } from './components/categories-list/categories-list'
import { HeaderNav } from './components/header-nav/header-nav'
import { ProductList } from './components/product-list/product-list'
import { groupBy } from '@/utils/helpers'
import { prisma } from '@/utils/lib/db'
import {
  getActiveProducts,
  getActiveProductsByCategory,
  getActiveProductsBySubcategory,
  getCategories,
} from '@/utils/lib/queries'

export async function generateStaticParams() {
  const categories = await prisma.category.findMany({
    include: {
      subcategories: true,
    },
  })

  const paths = [
    { category: [] },

    ...categories.map(category => ({
      category: [category.name],
    })),

    ...categories.flatMap(category =>
      category.subcategories.map(subcategory => ({
        category: [category.name, subcategory.name],
      })),
    ),
  ]

  return paths
}

export default async function Categories({ params }: { params: Promise<{ category?: string[] }> }) {
  const categoriesFromParam = (await params).category ?? []
  const paramsData = {
    category: categoriesFromParam[0] ? decodeURIComponent(categoriesFromParam[0]) : undefined,
    subcategory: categoriesFromParam[1] ? decodeURIComponent(categoriesFromParam[1]) : undefined,
  }

  const allCategories = await getCategories()

  const products = paramsData.subcategory
    ? await getActiveProductsBySubcategory(paramsData.subcategory)
    : paramsData.category
      ? await getActiveProductsByCategory(paramsData.category)
      : await getActiveProducts()

  const properties = products.map(product => product.properties).flat()
  const uniqueProperties = properties.filter(
    (prop, index, self) =>
      self.findIndex(p => p.name === prop.name && p.value === prop.value) === index,
  )
  const propertiesGroupedByName = groupBy(uniqueProperties, prop => prop.name)

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
          <ProductList products={products} />
        </div>
      </div>
    </div>
  )
}
