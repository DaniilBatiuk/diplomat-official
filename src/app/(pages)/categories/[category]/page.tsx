import styles from './categories.module.scss'
import { Aside } from './components/aside/aside'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { List } from './components/list/list'
import { prisma } from '@/utils/lib/db'
import { getProducts } from '@/utils/lib/queries'

export async function generateStaticParams() {
  const categories = await prisma.category.findMany()
  return categories.map(product => ({
    slug: product.id,
  }))
}

export default async function Categories({ params }: { params: Promise<{ category: string }> }) {
  const category = decodeURIComponent((await params).category)

  const products = await getProducts()

  return (
    <div className={styles.categories__container}>
      <CategoriesHeader />
      <div className={styles.categories__content}>
        <Aside category={category} />
        <List products={products} />
      </div>
    </div>
  )
}
