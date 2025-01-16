'use client'

import { $Enums } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { toast } from 'react-toastify'

import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { ICONS } from '@/utils/config/icons'

import { changeProductStatus } from '@/utils/lib/actions/product'

import styles from './../../card.module.scss'

interface BuyButtonProp {
  onAdminPage?: boolean
  product: IProductBase
}

export const BuyButton: React.FC<BuyButtonProp> = ({ onAdminPage, product }: BuyButtonProp) => {
  const { mutate, isPending } = useMutation({
    mutationFn: changeProductStatus,
    onSuccess: () => {
      toast.success('Статус успішно змінено')
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  return (
    <>
      {onAdminPage ? (
        <CustomButton
          disabled={isPending}
          onClick={e => {
            e.stopPropagation()
            mutate({
              id: product.id,
              status:
                product.status === $Enums.Status.active
                  ? $Enums.Status.inactive
                  : $Enums.Status.active,
            })
          }}
          className={clsx(
            product.status === $Enums.Status.active ? styles.active : styles.deactivate,
            { [styles.disable]: isPending },
          )}
        >
          {product.status === $Enums.Status.active ? 'D' : 'A'}
        </CustomButton>
      ) : (
        <CustomButton onClick={e => e.stopPropagation()}>{ICONS.buy()}</CustomButton>
      )}
    </>
  )
}
