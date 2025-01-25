import { groupBy } from '@/utils/helpers'

export const groupByProperties = (products: IProductWithProperties[]) => {
  const properties = products.map(product => product.properties).flat()
  const uniqueProperties = properties.filter(
    (prop, index, self) =>
      self.findIndex(p => p.name === prop.name && p.value === prop.value) === index,
  )
  const propertiesGroupedByName = groupBy(uniqueProperties, prop => prop.name)
  const filteredPropertiesGroupedByName = Object.fromEntries(
    Object.entries(propertiesGroupedByName).filter(([key, values]) => values.length > 1),
  )

  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(filteredPropertiesGroupedByName)) {
    result[key] = value.map(v => v.value).join(', ')
  }

  return result
}
