import styles from './[category]/categories.module.scss'
import { HeaderNav } from './[category]/components/header-nav/header-nav'
import { getCategories } from '@/utils/lib/queries'

export default async function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const allCategories = await getCategories()
  return (
    <div className={styles.categories}>
      <HeaderNav allCategories={allCategories} />
      <main>{children}</main>
    </div>
  )
}
