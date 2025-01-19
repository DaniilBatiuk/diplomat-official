import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { GroupByProperties } from '../helpers/group-by-properties'

export interface Filters {
  propertyStates: Record<string, string>
}

export const useFilters = (products: IProductBaseWithProperties[]) => {
  const searchParams = useSearchParams() as unknown as Map<string, string>

  const initialProperties = GroupByProperties(products)

  const [propertyStates, setPropertyStates] = useState(() => {
    const initialState: Record<string, string> = Object.keys(initialProperties).reduce(
      (acc, key) => {
        acc[key] = searchParams.has(key) ? searchParams.get(key)?.split(',').join(', ') || '' : ''
        return acc
      },
      {} as Record<string, string>,
    )
    return initialState
  })

  return { propertyStates, initialProperties, setPropertyStates }
}
