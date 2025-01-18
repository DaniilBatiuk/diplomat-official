import { groupBy } from '@/utils/helpers'

export const GroupByProperties = (products: IProductBaseWithProperties[]) => {
  const properties = products.map(product => product.properties).flat()
  const uniqueProperties = properties.filter(
    (prop, index, self) =>
      self.findIndex(p => p.name === prop.name && p.value === prop.value) === index,
  )
  const propertiesGroupedByName = groupBy(uniqueProperties, prop => prop.name)

  return propertiesGroupedByName
}
