import Link from 'next/link'

import { COLORS, COUNTRIES, MATERIAL, PRODUCTS } from '@/utils/config/data'
import { LINKS } from '@/utils/config/links'

import styles from './../../categories.module.scss'
import { CheckBoxCategories } from './components/check-box/check-box'

export const Aside: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__categories}>
        <h1>Категорії</h1>
        <ul>
          <li>
            <Link className={styles.aside__sales} href={LINKS.Categories + '/Знижки'}>
              Знижки
            </Link>
          </li>
          {[...new Set(PRODUCTS.map(product => product.category.name))].map(category => (
            <li key={category}>
              <Link href={LINKS.Categories + '/' + category}>{category}</Link>
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
