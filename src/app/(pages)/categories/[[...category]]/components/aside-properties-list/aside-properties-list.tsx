import styles from './../../categories.module.scss'
import { CheckBoxCategories } from './components/check-box/check-box'

interface AsidePropertiesListProps {
  propertiesGroupedByName: PropertiesGroupedByName
}

export const AsidePropertiesList: React.FC<AsidePropertiesListProps> = ({
  propertiesGroupedByName,
}: AsidePropertiesListProps) => {
  return (
    <>
      {Object.entries(propertiesGroupedByName).map(([key, value]) => (
        <div className={styles.aside__filter} key={key}>
          <h2>{key}</h2>
          <ul>
            {value.map(property => (
              <li key={property.value}>
                <CheckBoxCategories value={property.value} propertyName={key} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
