import { groupBy } from '@/utils/helpers'

export const groupByProperties = (products: IProductBaseWithProperties[]) => {
  const properties = products.map(product => product.properties).flat()
  const uniqueProperties = properties.filter(
    (prop, index, self) =>
      self.findIndex(p => p.name === prop.name && p.value === prop.value) === index,
  )
  const propertiesGroupedByName = groupBy(uniqueProperties, prop => prop.name)

  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(propertiesGroupedByName)) {
    result[key] = value.map(v => v.value).join(', ')
  }

  return result
}
