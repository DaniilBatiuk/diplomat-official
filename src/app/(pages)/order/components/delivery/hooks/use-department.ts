import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

interface useDepartment {
  selectedCity: Address | null
}

export const useDepartment = ({ selectedCity }: useDepartment) => {
  const [searchDepartmentActive, setSearchDepartmentActive] = useState(false)
  const inputRefDepartment = useRef<null | HTMLInputElement>(null)
  const [searchDepartmentValue, setSearchDepartmentValue] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)

  const { data } = useQuery({
    queryKey: ['department', selectedCity ? selectedCity.DeliveryCity : '', searchDepartmentValue],
    queryFn: meta =>
      orderApi.getDepartments(
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
