import { useRouter } from 'next/navigation'
import qs from 'qs'
import React, { useEffect } from 'react'

export const useQueryFilters = (propertyStates: Record<string, string>) => {
  const isMounted = React.useRef(false)
  const router = useRouter()

  useEffect(() => {
    if (isMounted.current) {
      const params = Object.keys(propertyStates).reduce(
        (acc, key) => {
          acc[key] = Array.from(propertyStates[key].split(', ').filter(item => item !== ''))
          return acc
        },
        {} as Record<string, string[]>,
      )

      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      })

      router.replace(`?${query}`, {
        scroll: false,
      })
    }

    isMounted.current = true
  }, [propertyStates])
}
