import { $Enums } from '@prisma/client'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

interface useDepartmentUrk {
  selectedCity: AddressUrk | Address | undefined
  deliveryWay: $Enums.DeliveryWays
}

export function isAddressUrk(adress: AddressUrk | Address): adress is AddressUrk {
  return 'city_doc_id' in adress
}

export const useDepartment = ({ selectedCity, deliveryWay }: useDepartmentUrk) => {
  const [searchDepartmentActive, setSearchDepartmentActive] = useState(false)
  const inputRefDepartment = useRef<null | HTMLInputElement>(null)
  const [searchDepartmentValue, setSearchDepartmentValue] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('')

  const { data: departmentUrk } = useQuery({
    queryKey: [
      'department urk',
      selectedCity && isAddressUrk(selectedCity) ? selectedCity.city_doc_id : '',
      searchDepartmentValue,
    ],
    queryFn: meta =>
      orderApi.getDepartmentsUkrPoshta(meta, {
        city_doc_id: selectedCity && isAddressUrk(selectedCity) ? selectedCity.city_doc_id : '',
      }),
    enabled: deliveryWay === $Enums.DeliveryWays.ukrPoshta && !!selectedCity,
    placeholderData: keepPreviousData,
  })

  const { data: departmentName } = useQuery({
    queryKey: [
      'department nova',
      selectedCity && !isAddressUrk(selectedCity) ? selectedCity.DeliveryCity : '',
      searchDepartmentValue,
    ],
    queryFn: meta =>
      orderApi.getDepartmentsNovaPoshta(
        meta,
        { cityRef: selectedCity && !isAddressUrk(selectedCity) ? selectedCity.DeliveryCity : '' },
        {
          findByString: searchDepartmentValue,
        },
      ),
    enabled: deliveryWay === $Enums.DeliveryWays.novaPoshta && !!selectedCity,
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    setSelectedDepartment('')
    setSearchDepartmentValue('')
  }, [selectedCity])

  return {
    departmentsListUkr: departmentUrk ? departmentUrk.data.warehouses : [],
    departmentsListNova: departmentName && !departmentName.errors.length ? departmentName.data : [],
    searchDepartmentActive,
    setSearchDepartmentActive,
    inputRefDepartment,
    searchDepartmentValue,
    setSearchDepartmentValue,
    setSelectedDepartment,
    selectedDepartment,
  }
}
