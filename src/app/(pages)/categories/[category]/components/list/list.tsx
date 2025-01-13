import { Pagination } from '@mui/material'
import { Product } from '@prisma/client'

import styles from './../../categories.module.scss'
import { Card } from '@/components'

type ListProps = {
  products: Product[]
}
export const List: React.FC<ListProps> = ({ products }: ListProps) => {
  return (
    <section className={styles.list__section}>
      <div className={styles.list}>
        {products.map(product => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
      <Pagination
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
      />
    </section>
  )
}
