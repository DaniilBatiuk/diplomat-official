'use client'

import { Dispatch, SetStateAction } from 'react'

import { LINKS } from '@/utils/config/links'

import styles from '../../header-catalog.module.scss'

import { Link } from '@/components'

interface CategoriesColumnsProps {
  selectedCategory: IBaseCategory
  setCatalogActive: Dispatch<SetStateAction<boolean>>
}

export const CategoriesColumns: React.FC<CategoriesColumnsProps> = ({
  selectedCategory,
  setCatalogActive,
}: CategoriesColumnsProps) => {
  return (
    <>
      <div className={styles.body__column}>
        <div className={styles.body__column_list}>
          {selectedCategory.subcategories.map(subcategory => (
            <div className={styles.body__column_list_item} key={subcategory.id}>
              <Link
                href={LINKS.Categories + '/' + subcategory.name}
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
                    <p className={styles.body__column_list_item_subcategories_sub}>
                      {product.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.body__column}>
        <div className={styles.body__column_list}>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 4</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 5</p>
              </Link>
            </div>
          </div>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 4</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 5</p>
              </Link>
            </div>
          </div>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 4</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 5</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 6</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body__column}>
        <div className={styles.body__column_list}>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 4</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 5</p>
              </Link>
            </div>
          </div>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 4</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 5</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 9</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 10</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body__column}>
        <div className={styles.body__column_list}>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 4</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 5</p>
              </Link>
            </div>
          </div>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 2</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 3</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 9</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 10</p>
              </Link>
            </div>
          </div>
          <div className={styles.body__column_list_item}>
            <Link href={'/'}>
              <p className={styles.body__column_list_item_title}>Вази</p>
            </Link>
            <div className={styles.body__column_list_item_subcategories}>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 1</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 7</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 8</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 9</p>
              </Link>
              <Link href={'/'}>
                <p className={styles.body__column_list_item_subcategories_sub}>фирма 10</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
