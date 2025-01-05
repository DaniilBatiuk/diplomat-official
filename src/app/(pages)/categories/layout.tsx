import styles from './[category]/categories.module.scss'
import { HeaderNav } from './[category]/components/header-nav/header-nav'

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.categories}>
      <HeaderNav />
      <main>{children}</main>
    </div>
  )
}
