'use client'

import { useState } from 'react'

import { useFilters } from '../../hooks/use-filters'
import { useQueryFilters } from '../../hooks/use-query-filters'

import styles from './../../categories.module.scss'
import { CheckBoxCategories } from './components/check-box/check-box'

interface AsidePropertiesListProps {
  products: IProductWithProperties[]
}

export const AsidePropertiesList: React.FC<AsidePropertiesListProps> = ({
  products,
}: AsidePropertiesListProps) => {
  const { initialProperties, propertyStates, setPropertyStates } = useFilters(products)
  useQueryFilters(propertyStates)

  // Состояние для управления видимостью всех значений для каждого свойства
  const [showAll, setShowAll] = useState<Record<string, boolean>>({})

  const toggleShowAll = (propertyName: string) => {
    setShowAll(prev => ({
      ...prev,
      [propertyName]: !prev[propertyName], // Переключение состояния
    }))
  }
  return (
    <>
      {Object.keys(propertyStates).map(propertyName => {
        const values = initialProperties[propertyName].split(', ')
        const isExpanded = showAll[propertyName]
        const visibleValues = isExpanded ? values : values.slice(0, 5)

        return (
          <div className={styles.aside__filter} key={propertyName}>
            <h2>{propertyName}</h2>
            <ul>
              {visibleValues.map(value => (
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
            {values.length > 5 && (
              <button className={styles.toggle_button} onClick={() => toggleShowAll(propertyName)}>
                {isExpanded ? 'Сховати' : 'Показати всі'}
              </button>
            )}
          </div>
        )
      })}
    </>
  )
}
