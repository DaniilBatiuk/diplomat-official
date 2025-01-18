'use client'

import { useSortAndFilterProducts } from '../../helpers/sort-and-filter-products'

import styles from './../../categories.module.scss'
import { NoData } from './component/no-data'
import { Card } from '@/components'

type ProductListProps = {
  products: IProductBaseWithProperties[]
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
      {/* <Pagination
        count={5}
        size='large'
        sx={{
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#f7ddbe',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#f1a84d',
            color: 'white',
          },
          '& .MuiPaginationItem-root.Mui-selected:hover': {
            backgroundColor: '#fa9f2f',
          },
        }}
      /> */}
    </section>
  )
}
