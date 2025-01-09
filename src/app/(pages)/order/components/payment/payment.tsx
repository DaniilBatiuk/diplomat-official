import styles from './../../order.module.scss'
import { FormBlock, RadioButtons } from '@/components'

export const Payment: React.FC = () => {
  return (
    <FormBlock title='4. Спосіб оплати'>
      <div className={styles.order__delivery}>
        <RadioButtons
          values={[
            'Оплата при отриманні товару',
            'Оплата за реквізитами на рахунок ПриватБанку',
            'Безготівкова оплата',
          ]}
        />
      </div>
    </FormBlock>
  )
}
