import Ukr from '@../../public/Ukr.png'
import { FormControlLabel, Radio } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import styles from './../../../../order.module.scss'
import { CustomField, RadioButtons } from '@/components'

interface UkrPoshtaProps {
  value: string
  setSearchCityActive: (value: boolean) => void
  inputRefCity: React.RefObject<HTMLInputElement | null>
  setSearchDepartmentActive: (value: boolean) => void
  inputRefDepartment: React.RefObject<HTMLInputElement | null>
  searchCityValue: string
  selectedDepartment: string
}
const DELIVERY_WAYS: string[] = ['У відділення', "Кур'єром"]

export const UkrPoshta: React.FC<UkrPoshtaProps> = ({
  value,
  setSearchCityActive,
  inputRefDepartment,
  setSearchDepartmentActive,
  inputRefCity,
  searchCityValue,
  selectedDepartment,
}: UkrPoshtaProps) => {
  const [deliveryWay, setDeliveryWay] = useState(DELIVERY_WAYS[0])
  return (
    <>
      <FormControlLabel
        value={'Доставка Укрпоштою - від 45 ₴'}
        control={<Radio />}
        label={
          <div className={styles.order__delivery_way}>
            <Image src={Ukr} width={40} height={40} alt='photo' priority quality={100} />
            <p>Доставка Укрпоштою - від 45 ₴</p>
          </div>
        }
      />
      <div
        className={clsx(styles.order__delivery_accordion, {
          [styles.active_2]: value === 'Доставка Укрпоштою - від 45 ₴',
        })}
      >
        <RadioButtons
          className={clsx(styles.order__delivery_way_inner, styles.order__delivery_way_inner_2)}
          value={deliveryWay}
          setValue={setDeliveryWay}
          values={DELIVERY_WAYS}
        />
        <CustomField
          label={'Вкажіть населений пункт'}
          fullWidth
          readOnly
          value={searchCityValue}
          onClick={() => {
            setSearchCityActive(true)
            if (inputRefCity.current) inputRefCity.current.focus()
          }}
          className={styles.order__delivery_margin_bottom_13}
        />
        <CustomField
          label={'Вкажіть відділення'}
          fullWidth
          disabled={searchCityValue === ''}
          value={selectedDepartment}
          readOnly
          onClick={() => {
            setSearchDepartmentActive(true)
            if (inputRefDepartment.current) inputRefDepartment.current.focus()
          }}
        />
      </div>
    </>
  )
}
