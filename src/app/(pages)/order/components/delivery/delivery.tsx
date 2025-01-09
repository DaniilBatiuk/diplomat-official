'use client'

import { RadioGroup } from '@mui/material'
import { useRef, useState } from 'react'

import styles from './../../order.module.scss'
import { NovaPoshta } from './components/nova-poshta/nova-poshta'
import { UkrPoshta } from './components/ukr-poshta/urk-poshta'
import { FormBlock, SearchPopUp } from '@/components'

export const Delivery: React.FC = () => {
  const [value, setValue] = useState('')

  // city
  const [searchCityActive, setSearchCityActive] = useState(false)
  const inputRefCity = useRef<null | HTMLInputElement>(null)
  const [searchCityValue, setSearchCityValue] = useState('')

  // city
  const [searchDepartmentActive, setSearchDepartmentActive] = useState(false)
  const inputRefDepartment = useRef<null | HTMLInputElement>(null)
  const [searchDepartmentValue, setSearchDepartmentValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <>
      <SearchPopUp
        searchActive={searchDepartmentActive}
        searchClose={() => setSearchDepartmentActive(false)}
        inputRef={inputRefDepartment}
        searchValue={searchDepartmentValue}
        setSearchValue={setSearchDepartmentValue}
      />
      <SearchPopUp
        searchActive={searchCityActive}
        searchClose={() => setSearchCityActive(false)}
        inputRef={inputRefCity}
        searchValue={searchCityValue}
        setSearchValue={setSearchCityValue}
      />
      <FormBlock title='4. Спосіб оплати'>
        <div className={styles.order__delivery}>
          <RadioGroup value={value} onChange={handleChange}>
            <NovaPoshta
              value={value}
              inputRefCity={inputRefCity}
              setSearchCityActive={setSearchCityActive}
              setSearchDepartmentActive={setSearchDepartmentActive}
              inputRefDepartment={inputRefDepartment}
            />

            <UkrPoshta
              value={value}
              inputRefCity={inputRefCity}
              setSearchCityActive={setSearchCityActive}
              setSearchDepartmentActive={setSearchDepartmentActive}
              inputRefDepartment={inputRefDepartment}
            />
          </RadioGroup>
        </div>
      </FormBlock>
    </>
  )
}
