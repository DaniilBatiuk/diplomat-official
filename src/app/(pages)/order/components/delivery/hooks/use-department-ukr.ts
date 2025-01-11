import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import { orderApi } from '@/utils/modules'

interface useDepartmentUrk {
  selectedCityUkr: AddressUrk | null
}

export const useDepartmentUkr = ({ selectedCityUkr }: useDepartmentUrk) => {
  const [searchDepartmentActiveUkr, setSearchDepartmentActiveUkr] = useState(false)
  const inputRefDepartmentUkr = useRef<null | HTMLInputElement>(null)
  const [searchDepartmentValueUkr, setSearchDepartmentValueUkr] = useState('')
  const [selectedDepartmentUkr, setSelectedDepartmentUkr] = useState<DepartmentUkr | null>(null)

  const { data } = useQuery({
    queryKey: ['department urk', selectedCityUkr ? selectedCityUkr.city_doc_id : ''],
    queryFn: meta =>
      orderApi.getDepartmentsUkrPoshta(meta, {
        city_doc_id: selectedCityUkr ? selectedCityUkr.city_doc_id : '',
      }),
    enabled: !!selectedCityUkr,
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    setSelectedDepartmentUkr(null)
    setSearchDepartmentValueUkr('')
  }, [selectedCityUkr])

  return {
    departmentsListUkr: data ? data.data.warehouses : [],
    searchDepartmentActiveUkr,
    setSearchDepartmentActiveUkr,
    inputRefDepartmentUkr,
    searchDepartmentValueUkr,
    setSearchDepartmentValueUkr,
    setSelectedDepartmentUkr,
    selectedDepartmentUkr,
  }
}
