'use client'

import { $Enums } from '@prisma/client'
import clsx from 'clsx'

import { CustomButton } from '@/components/ui/custom-button/custom-button'

import { ICONS } from '@/utils/constants'

import styles from './../../card.module.scss'
import { useCartAdd, useProductChangeStatus } from '@/utils/hooks'

interface BuyButtonProp {
  onAdminPage?: boolean
  product: IProductEntity
}

export const BuyButton: React.FC<BuyButtonProp> = ({ onAdminPage, product }: BuyButtonProp) => {
  const { mutate: addToCart, isPending: addToCartIsPending } = useCartAdd()
  const { mutate: changeProductStatus, isPending: changeProductStatusPending } =
    useProductChangeStatus()

  return (
    <>
      {onAdminPage ? (
        <CustomButton
          disabled={changeProductStatusPending}
          onClick={e => {
            e.stopPropagation()
            changeProductStatus({
              id: product.id,
              status:
                product.status === $Enums.Status.active
                  ? $Enums.Status.inactive
                  : $Enums.Status.active,
            })
          }}
          className={clsx(
            product.status === $Enums.Status.active ? styles.active : styles.deactivate,
            { [styles.disable]: changeProductStatusPending },
          )}
          aria-label={`Змінити статус ${
            product.status === $Enums.Status.active ? 'inactive' : 'active'
          }`}
        >
          {product.status === $Enums.Status.active ? 'D' : 'A'}
        </CustomButton>
      ) : (
        <CustomButton
          aria-label='Додати до кошику'
          disabled={addToCartIsPending}
          onClick={e => {
            e.stopPropagation()
            addToCart(product.id)
          }}
        >
          {ICONS.buy()}
        </CustomButton>
      )}
    </>
  )
}
