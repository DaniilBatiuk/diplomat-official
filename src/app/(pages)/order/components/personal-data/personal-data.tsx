import styles from './../../order.module.scss'
import { CustomField, FormBlock, TelInput } from '@/components'

export const PersonalData: React.FC = () => {
  return (
    <FormBlock title='2. Персональні дані'>
      <div className={styles.order__personal}>
        <CustomField label="Введіть ім'я" fullWidth />
        <CustomField label='Введіть прізвище' fullWidth />
        <CustomField label='Введіть e-mail' fullWidth type='email' />
        <TelInput />
      </div>
    </FormBlock>
  )
}
