import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

export const useCityUkr = () => {
  const [selectedCityUkr, setSelectedCityUkr] = useState<AddressUrk | null>(null)
  const [searchCityActiveUkr, setSearchCityActiveUkr] = useState(false)
  const inputRefCityUkr = useRef<null | HTMLInputElement>(null)
  const [searchCityValueUkr, setSearchCityValueUkr] = useState('')

  const { data } = useQuery({
    queryKey: ['city ukr', searchCityValueUkr],
    queryFn: meta => orderApi.getCitiesUkrPoshta(meta, { city: searchCityValueUkr }),
    placeholderData: keepPreviousData,
  })

  return {
    citiesListUkr: data ? data.data.cities : [],
    searchCityActiveUkr,
    setSearchCityActiveUkr,
    inputRefCityUkr,
    searchCityValueUkr,
    setSearchCityValueUkr,
    setSelectedCityUkr,
    selectedCityUkr,
  }
}
