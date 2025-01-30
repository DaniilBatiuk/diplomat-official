import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

import { LINKS } from '@/utils/constants'

import styles from '../../header-catalog.module.scss'

type CategoriesColumnProp = {
  setCatalogActive: Dispatch<SetStateAction<boolean>>
  subcategory: ISubcategory
  selectedCategoryName: string
}

export const CategoriesColumn: React.FC<CategoriesColumnProp> = ({
  setCatalogActive,
  subcategory,
  selectedCategoryName,
}: CategoriesColumnProp) => {
  return (
    <div className={styles.body__column}>
      <div className={styles.body__column_list}>
        <div className={styles.body__column_list_item} key={subcategory.id}>
          <Link
            href={LINKS.Categories + '/' + selectedCategoryName + '/' + subcategory.name}
            prefetch
            onClick={() => setCatalogActive(false)}
          >
            <p className={styles.body__column_list_item_title}>{subcategory.name}</p>
          </Link>
          <div className={styles.body__column_list_item_subcategories}>
            {subcategory.products.map(product => (
              <Link
                href={LINKS.Product + '/' + product.id}
                prefetch
                key={product.id}
                onClick={() => setCatalogActive(false)}
              >
                <p className={styles.body__column_list_item_subcategories_sub}>{product.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
