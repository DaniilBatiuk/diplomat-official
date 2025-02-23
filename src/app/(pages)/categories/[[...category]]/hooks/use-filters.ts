import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { groupByProperties } from '../helpers/group-by-properties'

export const useFilters = (products: IProductWithProperties[]) => {
  const searchParams = useSearchParams() as unknown as Map<string, string>

  const initialProperties = groupByProperties(products)

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
