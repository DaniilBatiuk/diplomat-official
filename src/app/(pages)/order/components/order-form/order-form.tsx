'use client'

import { useActionState } from 'react'
import { toast } from 'react-toastify'

import { initialState } from '@/utils/config/initial0value'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { createOrder } from '@/utils/lib/actions/order'

import { Comment } from '../comment/comment'
import { Delivery } from '../delivery/delivery'
import { OrderBasket } from '../order-basket/order-basket'
import { Payment } from '../payment/payment'
import { PersonalData } from '../personal-data/personal-data'
import { RightBlock } from '../right-block/right-block'

import styles from './../../order.module.scss'
import { ActionState } from '@/utils/lib/middleware'

export const OrderForm: React.FC = () => {
  const [createOrderState, createOrderFormAction, createOrderPending] = useActionState<
    ActionState,
    FormData
  >(createOrder, initialState)

  useFormResultProcess({
    state: createOrderState,
    isPending: createOrderPending,
    onSuccess: () => {
      toast.success('Замовлення успішно створено')
    },
    onError: () => {
      toast.error('Виникла помилка при створенні замовлення')
    },
  })

  return (
    <form noValidate className={styles.order__content} action={createOrderFormAction}>
      <div className={styles.order__content_left}>
        <OrderBasket />
        <PersonalData createOrderState={createOrderState} />
        <Delivery createOrderState={createOrderState} />
        <Payment />
        <Comment createOrderState={createOrderState} />
      </div>
      <RightBlock />
    </form>
  )
}
