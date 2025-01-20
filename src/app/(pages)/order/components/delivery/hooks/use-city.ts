import { $Enums } from '@prisma/client'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

export const useCity = (deliveryWay: $Enums.DeliveryWays) => {
  const [selectedCity, setSelectedCity] = useState<AddressUrk | Address | undefined>(undefined)
  const [searchCityActive, setSearchCityActive] = useState(false)
  const inputRefCity = useRef<null | HTMLInputElement>(null)
  const [searchCityValue, setSearchCityValue] = useState('')

  const { data: citiesListNova } = useQuery({
    queryKey: ['city nova', searchCityValue],
    queryFn: meta => orderApi.getCitiesNovaPoshta(meta, { city: searchCityValue }),
    placeholderData: keepPreviousData,
    enabled: deliveryWay === $Enums.DeliveryWays.novaPoshta,
  })

  useEffect(() => {
    setSearchCityValue('')
    setSelectedCity(undefined)
  }, [deliveryWay])

  const { data: citiesListUkr } = useQuery({
    queryKey: ['city ukr', searchCityValue],
    queryFn: meta => orderApi.getCitiesUkrPoshta(meta, { city: searchCityValue }),
    placeholderData: keepPreviousData,
    enabled: deliveryWay === $Enums.DeliveryWays.ukrPoshta,
  })

  return {
    citiesListNova:
      citiesListNova && !citiesListNova.errors.length ? citiesListNova.data[0].Addresses : [],
    citiesListUkr: citiesListUkr ? citiesListUkr.data.cities : [],
    searchCityActive,
    setSearchCityActive,
    inputRefCity,
    searchCityValue,
    setSearchCityValue,
    setSelectedCity,
    selectedCity,
  }
}
