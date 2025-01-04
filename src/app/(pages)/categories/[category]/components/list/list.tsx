import { PRODUCTS } from '@/utils/config/data'

import styles from './../../categories.module.scss'
import { Card } from '@/components'

export const List: React.FC = () => {
  return (
    <section className={styles.list}>
      {PRODUCTS.map(product => (
        <Card key={product.id} product={product}></Card>
      ))}
    </section>
  )
}
