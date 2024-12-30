import { HomeHeader } from './components/home-header/home-header'
import { Sales } from './components/sales/sales'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeHeader />
      <Sales />
    </div>
  )
}
