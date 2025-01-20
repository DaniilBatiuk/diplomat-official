'use client'

import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { $Enums } from '@prisma/client'
import { useState } from 'react'

import styles from './../../order.module.scss'
import { FormBlock } from '@/components'

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
        <RadioGroup value={paymentWay} onChange={handleChange} id='paymentWay' name='paymentWay'>
          {Object.values($Enums.PaymentWays).map((value, index) => (
            <FormControlLabel
              key={String(value)}
              value={value}
              control={<Radio />}
              label={PAYMENT_WAYS[index]}
            />
          ))}
        </RadioGroup>
      </div>
    </FormBlock>
  )
}
