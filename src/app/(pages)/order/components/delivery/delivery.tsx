'use client'

import Ukr from '@../../public/Ukr.png'
import Nova from '@../../public/nova.png'
import { RadioGroup } from '@mui/material'
import { $Enums } from '@prisma/client'
import { Dispatch, SetStateAction, useState } from 'react'

import styles from './../../order.module.scss'
import { DeliveryWay } from './components/delivery-way/delivery-way'
import { SearchPopUpCity } from './components/search-pop-up-city/search-pop-up-city'
import { SearchPopUpDepartmentNova } from './components/search-pop-up-department-nova/search-pop-up-department-nova'
import { SearchPopUpDepartmentUkr } from './components/search-pop-up-department-ukr/search-pop-up-department-ukr'
import { useCity } from './hooks/use-city'
import { useDepartment } from './hooks/use-department'
import { FormBlock } from '@/components'
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

  const [deliveryVariants, setDeliveryVariants] = useState<$Enums.DeliveryVariants>(
    $Enums.DeliveryVariants.department,
  )

  const handleChangeDeliveryVariants = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryVariants(event.target.value as $Enums.DeliveryVariants)
  }

  const {
    citiesListNova,
    citiesListUkr,
    searchCityActive,
    setSearchCityActive,
    inputRefCity,
    searchCityValue,
    setSearchCityValue,
    setSelectedCity,
    selectedCity,
  } = useCity(deliveryWay)

  const {
    departmentsListUkr,
    departmentsListNova,
    searchDepartmentActive,
    setSearchDepartmentActive,
    inputRefDepartment,
    searchDepartmentValue,
    setSearchDepartmentValue,
    setSelectedDepartment,
    selectedDepartment,
  } = useDepartment({ selectedCity, deliveryWay })

  return (
    <>
      <SearchPopUpCity
        searchValue={searchCityValue}
        setSearchValue={setSearchCityValue}
        searchActive={searchCityActive}
        searchClose={() => setSearchCityActive(false)}
        inputRef={inputRefCity}
        listData={citiesListUkr}
        setSelected={setSelectedCity as Dispatch<SetStateAction<AddressUrk | undefined>>}
        filterKey='city_name'
      />
      <SearchPopUpCity
        searchValue={searchCityValue}
        setSearchValue={setSearchCityValue}
        searchActive={searchCityActive}
        searchClose={() => setSearchCityActive(false)}
        inputRef={inputRefCity}
        listData={citiesListNova}
        setSelected={setSelectedCity as Dispatch<SetStateAction<Address | undefined>>}
        filterKey='Present'
      />

      <SearchPopUpDepartmentUkr
        listData={departmentsListUkr}
        setSelected={setSelectedDepartment}
        searchActive={searchDepartmentActive}
        searchClose={() => setSearchDepartmentActive(false)}
        inputRef={inputRefDepartment}
        searchValue={searchDepartmentValue}
        setSearchValue={setSearchDepartmentValue}
      />
      <SearchPopUpDepartmentNova
        listData={departmentsListNova}
        setSelected={setSelectedDepartment}
        searchActive={searchDepartmentActive}
        searchClose={() => setSearchDepartmentActive(false)}
        inputRef={inputRefDepartment}
        searchValue={searchDepartmentValue}
        setSearchValue={setSearchDepartmentValue}
      />
      <FormBlock title='3. Спосіб доставки'>
        <div className={styles.order__delivery}>
          <RadioGroup
            value={deliveryWay}
            onChange={handleChangeDeliveryWay}
            id='deliveryWay'
            name='deliveryWay'
          >
            <DeliveryWay
              value={deliveryWay}
              setSearchCityActive={setSearchCityActive}
              inputRefCity={inputRefCity}
              setSearchDepartmentActive={setSearchDepartmentActive}
              inputRefDepartment={inputRefDepartment}
              searchCityValue={searchCityValue}
              deliveryVariants={deliveryVariants}
              handleChangeDeliveryVariants={handleChangeDeliveryVariants}
              selectedDepartment={selectedDepartment}
              deliveryType={$Enums.DeliveryWays.novaPoshta}
              deliveryName='Нова Пошта - від 60 ₴'
              deliveryImage={Nova}
              createOrderState={createOrderState}
              selectedCity={selectedCity}
            />
            <DeliveryWay
              value={deliveryWay}
              setSearchCityActive={setSearchCityActive}
              inputRefCity={inputRefCity}
              setSearchDepartmentActive={setSearchDepartmentActive}
              inputRefDepartment={inputRefDepartment}
              searchCityValue={searchCityValue}
              deliveryVariants={deliveryVariants}
              handleChangeDeliveryVariants={handleChangeDeliveryVariants}
              selectedDepartment={selectedDepartment}
              deliveryType={$Enums.DeliveryWays.ukrPoshta}
              deliveryName='Укрпошта - від 45 ₴'
              deliveryImage={Ukr}
              createOrderState={createOrderState}
              selectedCity={selectedCity}
            />
          </RadioGroup>
        </div>
      </FormBlock>
    </>
  )
}
