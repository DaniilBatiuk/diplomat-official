import { COLORS, COUNTRIES, MATERIAL } from '@/utils/config/data'
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
}

export const Aside: React.FC<AsideProps> = ({ paramsData, allCategories }: AsideProps) => {
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
      <div className={styles.aside__filter}>
        <h2>МАТЕРІАЛ</h2>
        <ul>
          {MATERIAL.map(material => (
            <li key={material}>
              <CheckBoxCategories material={material} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.aside__filter}>
        <h2>КРАЇНА ВИРОБНИК</h2>
        <ul>
          {COUNTRIES.map(material => (
            <li key={material}>
              <CheckBoxCategories material={material} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.aside__filter}>
        <h2>КОЛІР</h2>
        <ul>
          {COLORS.map(material => (
            <li key={material}>
              <CheckBoxCategories material={material} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
