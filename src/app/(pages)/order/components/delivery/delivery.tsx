'use client'

import { RadioGroup } from '@mui/material'
import { $Enums } from '@prisma/client'
import { useState } from 'react'

import styles from './../../order.module.scss'
import { NovaPoshta } from './components/nova-poshta/nova-poshta'
import { SearchPopUpDepartmentUkr } from './components/search-pop-up-department-ukr/search-pop-up-department-ukr'
import { SearchPopUpDepartment } from './components/search-pop-up-department/search-pop-up-department'
import { SearchPopUpUrk } from './components/search-pop-up-ukr/search-pop-up-ukr'
import { UkrPoshta } from './components/ukr-poshta/urk-poshta'
import { useCityNova } from './hooks/use-city-nova'
import { useCityUkr } from './hooks/use-city-ukr'
import { useDepartmentNova } from './hooks/use-department-nova'
import { useDepartmentUkr } from './hooks/use-department-ukr'
import { FormBlock, SearchPopUp } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface DeliveryProps {
  createOrderState: ActionState
}

export const Delivery: React.FC<DeliveryProps> = ({ createOrderState }: DeliveryProps) => {
  const [deliveryWay, setDeliveryWay] = useState<$Enums.DeliveryWays>(
    $Enums.DeliveryWays.novaPoshta,
  )

  const handleChangeDeliveryWay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryWay((event.target as HTMLInputElement).value as $Enums.DeliveryWays)
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
  } = useCityNova()

  const {
    citiesListUkr,
    searchCityActiveUkr,
    setSearchCityActiveUkr,
    inputRefCityUkr,
    searchCityValueUkr,
    setSearchCityValueUkr,
    setSelectedCityUkr,
    selectedCityUkr,
  } = useCityUkr()

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
  } = useDepartmentNova({ selectedCity })

  const {
    departmentsListUkr,
    searchDepartmentActiveUkr,
    setSearchDepartmentActiveUkr,
    inputRefDepartmentUkr,
    searchDepartmentValueUkr,
    setSearchDepartmentValueUkr,
    setSelectedDepartmentUkr,
    selectedDepartmentUkr,
  } = useDepartmentUkr({ selectedCityUkr })

  return (
    <>
      <SearchPopUpUrk
        listData={citiesListUkr}
        setSelected={setSelectedCityUkr}
        searchActive={searchCityActiveUkr}
        searchClose={() => setSearchCityActiveUkr(false)}
        inputRef={inputRefCityUkr}
        searchValue={searchCityValueUkr}
        setSearchValue={setSearchCityValueUkr}
      />
      <SearchPopUpDepartmentUkr
        listData={departmentsListUkr}
        setSelected={setSelectedDepartmentUkr}
        searchActive={searchDepartmentActiveUkr}
        searchClose={() => setSearchDepartmentActiveUkr(false)}
        inputRef={inputRefDepartmentUkr}
        searchValue={searchDepartmentValueUkr}
        setSearchValue={setSearchDepartmentValueUkr}
      />
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
      <FormBlock title='3. Спосіб доставки'>
        <div className={styles.order__delivery}>
          <RadioGroup
            value={deliveryWay}
            onChange={handleChangeDeliveryWay}
            id='deliveryWay'
            name='deliveryWay'
          >
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
              searchCityValue={selectedCityUkr ? selectedCityUkr.city_name : ''}
              value={deliveryWay}
              inputRefCity={inputRefCityUkr}
              setSearchCityActive={setSearchCityActiveUkr}
              setSearchDepartmentActive={setSearchDepartmentActiveUkr}
              inputRefDepartment={inputRefDepartmentUkr}
              selectedDepartment={selectedDepartmentUkr ? selectedDepartmentUkr.name : ''}
            />
          </RadioGroup>
        </div>
      </FormBlock>
    </>
  )
}
