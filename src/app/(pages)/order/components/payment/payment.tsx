'use client'

import { $Enums } from '@prisma/client'
import { useState } from 'react'

import styles from './../../order.module.scss'
import { FormBlock, RadioButtons } from '@/components'

const PAYMENT_WAYS: string[] = [
  'Оплата при отриманні товару',
  'Оплата за реквізитами на рахунок ПриватБанку',
  'Безготівкова оплата',
]

export const Payment: React.FC = () => {
  const [paymentWay, setPaymentWay] = useState<$Enums.PaymentWays>($Enums.PaymentWays.uponReceipt)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentWay(event.target.value as $Enums.PaymentWays)
  }

  return (
    <FormBlock title='4. Спосіб оплати'>
      <div className={styles.order__delivery}>
        <RadioButtons
          labels={PAYMENT_WAYS}
          values={Object.values($Enums.PaymentWays)}
          value={paymentWay}
          handleChange={handleChange}
          idName='paymentWay'
        />
      </div>
    </FormBlock>
  )
}
