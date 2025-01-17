import styles from './categories.module.scss'
import { Aside } from './components/aside/aside'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { HeaderNav } from './components/header-nav/header-nav'
import { List } from './components/list/list'
import { useFetchProducts } from './hooks/use-fetch-products'
import { useProcessProperties } from './hooks/use-group-properties'
import { prisma } from '@/utils/lib/db'
import { getCategories } from '@/utils/lib/queries'

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

  const { products } = await useFetchProducts({ paramsData })
  const { propertiesGroupedByName } = useProcessProperties({ products })

  return (
    <div className={styles.categories}>
      <HeaderNav allCategories={allCategories} propertiesGroupedByName={propertiesGroupedByName} />
      <div className={styles.categories__container}>
        <CategoriesHeader paramsData={paramsData} />
        <div className={styles.categories__content}>
          <Aside
            allCategories={allCategories}
            paramsData={paramsData}
            propertiesGroupedByName={propertiesGroupedByName}
          />
          <List products={products} />
        </div>
      </div>
    </div>
  )
}
