import { PRODUCTS } from '@/utils/config/data'

import styles from './categories.module.scss'
import { Aside } from './components/aside/aside'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { List } from './components/list/list'

export async function generateStaticParams() {
  return [...new Set(PRODUCTS.map(product => product.category.name))].map(category => ({
    category: category,
  }))
}

export default async function Categories({ params }: { params: Promise<{ category: string }> }) {
  const category = decodeURIComponent((await params).category)
  return (
    <div className={styles.categories__container}>
      <CategoriesHeader />
      <div className={styles.categories__content}>
        <Aside category={category} />
        <List />
      </div>
    </div>
  )
}
