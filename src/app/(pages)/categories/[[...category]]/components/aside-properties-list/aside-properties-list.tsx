'use client'

import { useFilters } from '../../hooks/use-filters'
import { useQueryFilters } from '../../hooks/use-query-filters'

import styles from './../../categories.module.scss'
import { CheckBoxCategories } from './components/check-box/check-box'

interface AsidePropertiesListProps {
  products: IProductBaseWithProperties[]
}

export const AsidePropertiesList: React.FC<AsidePropertiesListProps> = ({
  products,
}: AsidePropertiesListProps) => {
  const { initialProperties, propertyStates, setPropertyStates } = useFilters(products)
  useQueryFilters(propertyStates)
  return (
    <>
      {Object.keys(propertyStates).map(propertyName => (
        <div className={styles.aside__filter} key={propertyName}>
          <h2>{propertyName}</h2>
          <ul>
            {initialProperties[propertyName].split(', ').map(value => (
              <li key={value}>
                <CheckBoxCategories
                  value={value}
                  setPropertyStates={setPropertyStates}
                  propertyName={propertyName}
                  propertyStates={propertyStates}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
