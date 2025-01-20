import { FormControlLabel, Radio } from '@mui/material'
import { $Enums } from '@prisma/client'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

import styles from './../../../../order.module.scss'
import { DeliveryFields } from './components/delivery-fields/delivery-fields'
import { ActionState } from '@/utils/lib/middleware'

interface DeliveryProps {
  value: $Enums.DeliveryWays
  setSearchCityActive: (value: boolean) => void
  inputRefCity: React.RefObject<HTMLInputElement | null>
  setSearchDepartmentActive: (value: boolean) => void
  inputRefDepartment: React.RefObject<HTMLInputElement | null>
  searchCityValue: string
  selectedDepartment: string
  selectedCity: AddressUrk | Address | undefined
  deliveryVariants: $Enums.DeliveryVariants
  handleChangeDeliveryVariants: (event: React.ChangeEvent<HTMLInputElement>) => void
  deliveryType: string
  deliveryName: string
  deliveryImage: StaticImageData
  createOrderState: ActionState
}

export const DeliveryWay: React.FC<DeliveryProps> = ({
  value,
  setSearchCityActive,
  inputRefCity,
  setSearchDepartmentActive,
  inputRefDepartment,
  searchCityValue,
  selectedDepartment,
  deliveryType,
  deliveryName,
  deliveryVariants,
  deliveryImage,
  handleChangeDeliveryVariants,
  createOrderState,
  selectedCity,
}: DeliveryProps) => {
  return (
    <>
      <FormControlLabel
        value={deliveryType}
        control={<Radio />}
        label={
          <div className={styles.order__delivery_way}>
            <Image
              src={deliveryImage}
              width={40}
              height={40}
              alt={deliveryName}
              priority
              quality={100}
              loading={'eager'}
            />
            <p>{deliveryName}</p>
          </div>
        }
      />
      <div
        className={clsx(styles.order__delivery_accordion, {
          [styles.active]: value === deliveryType,
        })}
      >
        <DeliveryFields
          createOrderState={createOrderState}
          deliveryVariants={deliveryVariants}
          handleChangeDeliveryVariants={handleChangeDeliveryVariants}
          inputRefCity={inputRefCity}
          searchCityValue={searchCityValue}
          setSearchCityActive={setSearchCityActive}
          setSearchDepartmentActive={setSearchDepartmentActive}
          inputRefDepartment={inputRefDepartment}
          selectedDepartment={selectedDepartment}
          selectedCity={selectedCity}
        />
      </div>
    </>
  )
}
