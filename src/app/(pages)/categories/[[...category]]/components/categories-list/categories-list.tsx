import { LINKS } from '@/utils/config/links'

import styles from './../../categories.module.scss'
import { Link } from '@/components'

interface CategoriesListProps {
  paramsData: {
    category: string | undefined
    subcategory: string | undefined
  }
  allCategories: ICategory[]
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  paramsData,
  allCategories,
}: CategoriesListProps) => {
  const currentSubcategories = allCategories.find(category => category.name === paramsData.category)
  const categoriesOrSubCategoriesNameList = currentSubcategories
    ? currentSubcategories.subcategories.map(category => category.name)
    : allCategories.map(category => category.name)

  return (
    <div className={styles.aside__categories}>
      <h1>{paramsData.category ? paramsData.category : 'Категорії'}</h1>
      <ul>
        {categoriesOrSubCategoriesNameList.map(name => (
          <li key={name}>
            <Link
              className={
                paramsData.subcategory && paramsData.subcategory === name ? styles.active : ''
              }
              href={
                paramsData.category
                  ? LINKS.Categories + '/' + paramsData.category + '/' + name
                  : LINKS.Categories + '/' + name
              }
              prefetch
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
