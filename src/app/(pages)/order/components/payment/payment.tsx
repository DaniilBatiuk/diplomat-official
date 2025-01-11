'use client'

import { useState } from 'react'

import styles from './../../order.module.scss'
import { FormBlock, RadioButtons } from '@/components'

const PAYMENT_WAYS: string[] = [
  'Оплата при отриманні товару',
  'Оплата за реквізитами на рахунок ПриватБанку',
  'Безготівкова оплата',
]

export const Payment: React.FC = () => {
  const [paymentWay, setPaymentWay] = useState(PAYMENT_WAYS[0])

  return (
    <FormBlock title='4. Спосіб оплати'>
      <div className={styles.order__delivery}>
        <RadioButtons value={paymentWay} setValue={setPaymentWay} values={PAYMENT_WAYS} />
      </div>
    </FormBlock>
  )
}
