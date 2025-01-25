'use client'

import { useSortAndFilterProducts } from '../../hooks/use-sort-and-filter-products'

import styles from './../../categories.module.scss'
import { NoData } from './component/no-data'
import { Card } from '@/components'

type ProductListProps = {
  products: IProductWithProperties[]
}
export const ProductList: React.FC<ProductListProps> = ({ products }: ProductListProps) => {
  const sortedAndFilteredProducts = useSortAndFilterProducts(products)

  return (
    <section className={styles.list__section}>
      {sortedAndFilteredProducts.length > 0 ? (
        <div className={styles.list}>
          {sortedAndFilteredProducts.map(product => (
            <Card key={product.id} product={product}></Card>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </section>
  )
}
