import { groupBy } from '@/utils/helpers'

interface useProcessProductsProps {
  products: IProductBaseWithProperties[]
}

export const useProcessProperties = ({ products }: useProcessProductsProps) => {
  const properties = products.map(product => product.properties).flat()
  const uniqueProperties = properties.filter(
    (prop, index, self) =>
      self.findIndex(p => p.name === prop.name && p.value === prop.value) === index,
  )
  const propertiesGroupedByName = groupBy(uniqueProperties, prop => prop.name)

  return { propertiesGroupedByName }
}
