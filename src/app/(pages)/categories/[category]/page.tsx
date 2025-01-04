import styles from './categories.module.scss'
import { Aside } from './components/aside/aside'
import { CategoriesHeader } from './components/categories-header/categories-header'
import { HeaderNav } from './components/header-nav/header-nav'
import { List } from './components/list/list'

export default function Categories() {
  return (
    <div className={styles.categories}>
      <HeaderNav />
      <div className={styles.categories__container}>
        <CategoriesHeader />
        <div className={styles.categories__content}>
          <Aside />
          <List />
        </div>
      </div>
    </div>
  )
}
