import Nova from '@../../public/nova.png'
import { FormControlLabel, Radio } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './../../../../order.module.scss'
import { CustomField, RadioButtons } from '@/components'

interface NovaPoshtaProps {
  value: string
  setSearchCityActive: (value: boolean) => void
  inputRefCity: React.RefObject<HTMLInputElement | null>
  setSearchDepartmentActive: (value: boolean) => void
  inputRefDepartment: React.RefObject<HTMLInputElement | null>
  searchCityValue: string
  selectedDepartment: string
}

const DELIVERY_WAYS: string[] = ['У відділення', "Кур'єром", 'У поштомат']

export const NovaPoshta: React.FC<NovaPoshtaProps> = ({
  value,
  setSearchCityActive,
  inputRefDepartment,
  setSearchDepartmentActive,
  inputRefCity,
  searchCityValue,
  selectedDepartment,
}: NovaPoshtaProps) => {
  const [deliveryWay, setDeliveryWay] = useState(DELIVERY_WAYS[0])

  useEffect(() => {
    if (selectedDepartment && selectedDepartment.includes('Поштомат')) {
      setDeliveryWay(DELIVERY_WAYS[2])
    } else if (
      selectedDepartment &&
      selectedDepartment.includes('Відділення') &&
      deliveryWay !== DELIVERY_WAYS[1]
    ) {
      setDeliveryWay(DELIVERY_WAYS[0])
    }
  }, [selectedDepartment])
  return (
    <>
      <FormControlLabel
        className={styles.order__delivery_margin_bottom}
        value={'Доставка Новою Поштою - від 60 ₴'}
        control={<Radio />}
        label={
          <div className={styles.order__delivery_way}>
            <Image
              src={Nova}
              width={40}
              height={40}
              alt='photo'
              priority
              quality={100}
              loading={'eager'}
            />
            <p>Доставка Новою Поштою - від 60 ₴</p>
          </div>
        }
      />
      <div
        className={clsx(styles.order__delivery_accordion, {
          [styles.active]: value === 'Доставка Новою Поштою - від 60 ₴',
        })}
      >
        <RadioButtons
          value={deliveryWay}
          setValue={setDeliveryWay}
          className={styles.order__delivery_way_inner}
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
          readOnly
          disabled={searchCityValue === ''}
          value={selectedDepartment}
          onClick={() => {
            setSearchDepartmentActive(true)
            if (inputRefDepartment.current) inputRefDepartment.current.focus()
          }}
        />
      </div>
    </>
  )
}
