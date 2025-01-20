import styles from './../../order.module.scss'
import { CustomField, FormBlock, TelInput } from '@/components'
import { ActionState } from '@/utils/lib/middleware'

interface PersonalDataProps {
  createOrderState: ActionState
}

export const PersonalData: React.FC<PersonalDataProps> = ({
  createOrderState,
}: PersonalDataProps) => {
  return (
    <FormBlock title='2. Персональні дані'>
      <div className={styles.order__personal}>
        <CustomField
          fullWidth
          idName='name'
          defaultValue={createOrderState.inputs.name}
          label={createOrderState.errors.name ?? "Введіть ім'я"}
          error={!!createOrderState.errors.name}
        />
        <CustomField
          fullWidth
          idName='surname'
          defaultValue={createOrderState.inputs.surname}
          label={createOrderState.errors.surname ?? 'Введіть прізвище'}
          error={!!createOrderState.errors.surname}
        />
        <CustomField
          fullWidth
          type='email'
          idName='email'
          defaultValue={createOrderState.inputs.email}
          label={createOrderState.errors.email ?? 'Введіть e-mail'}
          error={!!createOrderState.errors.email}
        />
        <TelInput
          idName='phone'
          defaultValue={createOrderState.inputs.phone}
          label={createOrderState.errors.phone ?? 'Введіть номер телефону'}
          error={!!createOrderState.errors.phone}
        />
      </div>
    </FormBlock>
  )
}
