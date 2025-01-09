import { COLORS, COUNTRIES, MATERIAL, PRODUCTS } from '@/utils/config/data'
import { LINKS } from '@/utils/config/links'

import styles from './../../categories.module.scss'
import { CheckBoxCategories } from './components/check-box/check-box'
import { Link } from '@/components'

interface AsideProps {
  category: string
}

export const Aside: React.FC<AsideProps> = ({ category }: AsideProps) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__categories}>
        <h1>{category !== 'Всі' ? category : 'Категорії'}</h1>
        <ul>
          <li>
            <Link className={styles.aside__sales} href={LINKS.Categories + '/Знижки'} prefetch>
              Знижки
            </Link>
          </li>
          {[...new Set(PRODUCTS.map(product => product.category.name))].map(category => (
            <li key={category}>
              <Link href={LINKS.Categories + '/' + category} prefetch>
                {category}
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
