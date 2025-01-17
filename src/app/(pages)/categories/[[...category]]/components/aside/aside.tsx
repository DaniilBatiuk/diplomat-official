import { LINKS } from '@/utils/config/links'

import styles from './../../categories.module.scss'
import { CheckBoxCategories } from './components/check-box/check-box'
import { Link } from '@/components'

interface AsideProps {
  allCategories: IBaseCategory[]
  paramsData: {
    category: string | undefined
    subcategory: string | undefined
  }
  propertiesGroupedByName: Record<
    string,
    {
      name: string
      value: string
    }[]
  >
}

export const Aside: React.FC<AsideProps> = ({
  paramsData,
  allCategories,
  propertiesGroupedByName,
}: AsideProps) => {
  const currentSubcategories = allCategories.find(category => category.name === paramsData.category)
  const categoriesOrSubCategoriesNameList = currentSubcategories
    ? currentSubcategories.subcategories.map(category => category.name)
    : allCategories.map(category => category.name)

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__categories}>
        <h1>{paramsData.category ? paramsData.category : 'Категорії'}</h1>
        <ul>
          {/* <li>
            <Link className={styles.aside__sales} href={LINKS.Categories + '/Знижки'} prefetch>
              Знижки
            </Link>
          </li> */}
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
      {Object.entries(propertiesGroupedByName).map(([key, value]) => (
        <div className={styles.aside__filter} key={key}>
          <h2>{key}</h2>
          <ul>
            {value.map(property => (
              <li key={property.value}>
                <CheckBoxCategories value={property.value} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
