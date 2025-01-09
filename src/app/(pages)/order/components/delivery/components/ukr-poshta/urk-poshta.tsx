import Ukr from '@../../public/Ukr.png'
import { FormControlLabel, Radio } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './../../../../order.module.scss'
import { CustomField, RadioButtons } from '@/components'

interface UkrPoshtaProps {
  value: string
  setSearchCityActive: (value: boolean) => void
  inputRefCity: React.RefObject<HTMLInputElement | null>
  setSearchDepartmentActive: (value: boolean) => void
  inputRefDepartment: React.RefObject<HTMLInputElement | null>
}

export const UkrPoshta: React.FC<UkrPoshtaProps> = ({
  value,
  setSearchCityActive,
  inputRefCity,
  setSearchDepartmentActive,
  inputRefDepartment,
}: UkrPoshtaProps) => {
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
          values={["Кур'єром", 'У відділення']}
        />
        <CustomField
          label={'Вкажіть населений пункт'}
          fullWidth
          readOnly
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
          onClick={() => {
            setSearchDepartmentActive(true)
            if (inputRefDepartment.current) inputRefDepartment.current.focus()
          }}
        />
      </div>
    </>
  )
}
