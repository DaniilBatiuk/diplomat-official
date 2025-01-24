'use client'

import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import { useActionState } from 'react'
import { toast } from 'react-toastify'

import { initialState } from '@/utils/config/initial-state'
import { LINKS } from '@/utils/config/links'

import { useFormResultProcess } from '@/utils/hooks/useFormResultProcess/useFormResultProcess'

import { getCart } from '@/utils/lib/actions/cart'
import { createOrder } from '@/utils/lib/actions/order'

import { BasketSkeleton } from '../basket-skeleton/basket-skeleton'
import { Comment } from '../comment/comment'
import { Delivery } from '../delivery/delivery'
import { OrderBasket } from '../order-basket/order-basket'
import { Payment } from '../payment/payment'
import { PersonalData } from '../personal-data/personal-data'
import { RightBlock } from '../right-block/right-block'

import styles from './../../order.module.scss'
import { ActionState } from '@/utils/lib/middleware'

export const OrderForm: React.FC = () => {
  const queryClient = useQueryClient()
  const {
    data: cart,
    isPending: isCartPending,
    isLoading: isCartLoading,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    placeholderData: keepPreviousData,
  })

  const [createOrderState, createOrderFormAction, createOrderPending] = useActionState<
    ActionState,
    FormData
  >(createOrder, initialState)

  useFormResultProcess({
    state: createOrderState,
    isPending: createOrderPending,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
      toast.success('Замовлення успішно створено')
      redirect(LINKS.Home)
    },
    onError: () => {
      if (createOrderState.errors.message) {
        toast.error(createOrderState.errors.message)
      } else {
        toast.error('Виникла помилка при створенні замовлення')
      }
    },
  })

  return (
    <form noValidate className={styles.order__content} action={createOrderFormAction}>
      <div className={styles.order__content_left}>
        {isCartPending ? <BasketSkeleton /> : <OrderBasket cart={cart} />}
        <PersonalData createOrderState={createOrderState} />
        <Delivery createOrderState={createOrderState} />
        <Payment />
        <Comment createOrderState={createOrderState} />
      </div>
      <RightBlock cart={cart} isCartLoading={isCartLoading} />
    </form>
  )
}
