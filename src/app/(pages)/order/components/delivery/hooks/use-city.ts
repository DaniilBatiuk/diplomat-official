import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

export const useCity = () => {
  const [selectedCity, setSelectedCity] = useState<Address | null>(null)
  const [searchCityActive, setSearchCityActive] = useState(false)
  const inputRefCity = useRef<null | HTMLInputElement>(null)
  const [searchCityValue, setSearchCityValue] = useState('')

  const { data } = useQuery({
    queryKey: ['city', searchCityValue],
    queryFn: meta => orderApi.getCities(meta, { city: searchCityValue }),
    placeholderData: keepPreviousData,
  })

  return {
    citiesList: data && !data.errors.length ? data.data[0].Addresses : [],
    searchCityActive,
    setSearchCityActive,
    inputRefCity,
    searchCityValue,
    setSearchCityValue,
    setSelectedCity,
    selectedCity,
  }
}
