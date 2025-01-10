'use client'

import { RadioGroup } from '@mui/material'
import { useState } from 'react'

import styles from './../../order.module.scss'
import { NovaPoshta } from './components/nova-poshta/nova-poshta'
import { SearchPopUpDepartment } from './components/search-pop-up-department/search-pop-up-department'
import { UkrPoshta } from './components/ukr-poshta/urk-poshta'
import { useCity } from './hooks/use-city'
import { useDepartment } from './hooks/use-department'
import { FormBlock, SearchPopUp } from '@/components'

export const Delivery: React.FC = () => {
  const [deliveryWay, setDeliveryWay] = useState('')

  const handleChangeDeliveryWay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryWay((event.target as HTMLInputElement).value)
  }

  // city
  const {
    citiesList,
    searchCityActive,
    setSearchCityActive,
    inputRefCity,
    searchCityValue,
    setSearchCityValue,
    setSelectedCity,
    selectedCity,
  } = useCity()

  // department
  const {
    departmentsList,
    searchDepartmentActive,
    setSearchDepartmentActive,
    inputRefDepartment,
    searchDepartmentValue,
    setSearchDepartmentValue,
    setSelectedDepartment,
    selectedDepartment,
  } = useDepartment({ selectedCity })

  console.log('render')
  return (
    <>
      <SearchPopUpDepartment
        listData={departmentsList}
        setSelected={setSelectedDepartment}
        searchActive={searchDepartmentActive}
        searchClose={() => setSearchDepartmentActive(false)}
        inputRef={inputRefDepartment}
        searchValue={searchDepartmentValue}
        setSearchValue={setSearchDepartmentValue}
      />
      <SearchPopUp
        listData={citiesList}
        setSelected={setSelectedCity}
        searchActive={searchCityActive}
        searchClose={() => setSearchCityActive(false)}
        inputRef={inputRefCity}
        searchValue={searchCityValue}
        setSearchValue={setSearchCityValue}
      />
      <FormBlock title='4. Спосіб оплати'>
        <div className={styles.order__delivery}>
          <RadioGroup value={deliveryWay} onChange={handleChangeDeliveryWay}>
            <NovaPoshta
              value={deliveryWay}
              inputRefCity={inputRefCity}
              setSearchCityActive={setSearchCityActive}
              setSearchDepartmentActive={setSearchDepartmentActive}
              inputRefDepartment={inputRefDepartment}
              searchCityValue={selectedCity ? selectedCity.Present : ''}
              selectedDepartment={selectedDepartment ? selectedDepartment.Description : ''}
            />
            <UkrPoshta
              searchCityValue={selectedCity ? selectedCity.Present : ''}
              value={deliveryWay}
              inputRefCity={inputRefCity}
              setSearchCityActive={setSearchCityActive}
              setSearchDepartmentActive={setSearchDepartmentActive}
              inputRefDepartment={inputRefDepartment}
              selectedDepartment={selectedDepartment ? selectedDepartment.Description : ''}
            />
          </RadioGroup>
        </div>
      </FormBlock>
    </>
  )
}
