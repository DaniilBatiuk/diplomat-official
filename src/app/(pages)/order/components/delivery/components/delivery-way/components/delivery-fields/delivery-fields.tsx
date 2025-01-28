import { $Enums } from '@prisma/client'

import { isAddressUrk } from '../../../../hooks/use-department'

import styles from './../../../../../../order.module.scss'
import { CustomField, RadioButtons } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

const DELIVERY_VARIANTS: string[] = ['У відділення', "Кур'єром"]

interface DeliveryFieldsProps {
  deliveryVariants: $Enums.DeliveryVariants
  handleChangeDeliveryVariants: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputRefCity: React.RefObject<HTMLInputElement | null>
  searchCityValue: string
  setSearchCityActive: (value: boolean) => void
  setSearchDepartmentActive: (value: boolean) => void
  inputRefDepartment: React.RefObject<HTMLInputElement | null>
  createOrderState: ActionState
  selectedDepartment: string
  selectedCity: AddressUrk | Address | undefined
}

export const DeliveryFields: React.FC<DeliveryFieldsProps> = ({
  deliveryVariants,
  handleChangeDeliveryVariants,
  inputRefCity,
  setSearchCityActive,
  setSearchDepartmentActive,
  inputRefDepartment,
  selectedDepartment,
  createOrderState,
  selectedCity,
}: DeliveryFieldsProps) => {
  return (
    <>
      <RadioButtons
        labels={DELIVERY_VARIANTS}
        values={Object.values($Enums.DeliveryVariants)}
        value={deliveryVariants}
        handleChange={handleChangeDeliveryVariants}
        idName='deliveryVariants'
        className={styles.order__delivery_way_inner}
      />
      <CustomField
        fullWidth
        idName='city'
        defaultValue={createOrderState.inputs.city}
        label={createOrderState.errors.city ?? 'Вкажіть населений пункт'}
        error={!!createOrderState.errors.city}
        value={
          selectedCity && isAddressUrk(selectedCity)
            ? selectedCity.city_name
            : selectedCity && !isAddressUrk(selectedCity)
              ? selectedCity.Present
              : ''
        }
        onClick={() => {
          setSearchCityActive(true)
          if (inputRefCity.current) inputRefCity.current.focus()
        }}
        className={styles.order__delivery_margin_bottom_13}
      />
      <CustomField
        idName='department'
        defaultValue={createOrderState.inputs.department}
        label={createOrderState.errors.department ?? 'Вкажіть відділення'}
        error={!!createOrderState.errors.department}
        fullWidth
        readOnly={!!!selectedCity}
        disabled={!!!selectedCity}
        value={selectedDepartment}
        onClick={() => {
          setSearchDepartmentActive(true)
          if (inputRefDepartment.current) inputRefDepartment.current.focus()
        }}
      />
    </>
  )
}
