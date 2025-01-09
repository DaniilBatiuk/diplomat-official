import Nova from '@../../public/nova.png'
import { FormControlLabel, Radio } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './../../../../order.module.scss'
import { CustomField, RadioButtons } from '@/components'

interface NovaPoshtaProps {
  value: string
  setSearchCityActive: (value: boolean) => void
  inputRefCity: React.RefObject<HTMLInputElement | null>
  setSearchDepartmentActive: (value: boolean) => void
  inputRefDepartment: React.RefObject<HTMLInputElement | null>
}
export const NovaPoshta: React.FC<NovaPoshtaProps> = ({
  value,
  setSearchCityActive,
  inputRefDepartment,
  setSearchDepartmentActive,
  inputRefCity,
}: NovaPoshtaProps) => {
  return (
    <>
      <FormControlLabel
        className={styles.order__delivery_margin_bottom}
        value={'Доставка Новою Поштою - від 60 ₴'}
        control={<Radio />}
        label={
          <div className={styles.order__delivery_way}>
            <Image src={Nova} width={40} height={40} alt='photo' priority quality={100} />
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
          className={styles.order__delivery_way_inner}
          values={["Кур'єром", 'У відділення', 'У поштомат']}
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
