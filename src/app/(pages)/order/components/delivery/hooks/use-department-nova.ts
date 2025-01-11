import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

interface useDepartmentNova {
  selectedCity: Address | null
}

export const useDepartmentNova = ({ selectedCity }: useDepartmentNova) => {
  const [searchDepartmentActive, setSearchDepartmentActive] = useState(false)
  const inputRefDepartment = useRef<null | HTMLInputElement>(null)
  const [searchDepartmentValue, setSearchDepartmentValue] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)

  const { data } = useQuery({
    queryKey: [
      'department nova',
      selectedCity ? selectedCity.DeliveryCity : '',
      searchDepartmentValue,
    ],
    queryFn: meta =>
      orderApi.getDepartmentsNovaPoshta(
        meta,
        { cityRef: selectedCity ? selectedCity.DeliveryCity : '' },
        {
          findByString: searchDepartmentValue,
        },
      ),
    enabled: !!selectedCity,
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    setSelectedDepartment(null)
    setSearchDepartmentValue('')
  }, [selectedCity])

  return {
    departmentsList: data && !data.errors.length ? data.data : [],
    searchDepartmentActive,
    setSearchDepartmentActive,
    inputRefDepartment,
    searchDepartmentValue,
    setSearchDepartmentValue,
    setSelectedDepartment,
    selectedDepartment,
  }
}
