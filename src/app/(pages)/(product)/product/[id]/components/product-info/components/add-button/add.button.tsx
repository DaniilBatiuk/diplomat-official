'use client'

import { ICONS } from '@/utils/config/icons'

import { CustomButton } from '@/components'
import { useCartAdd } from '@/utils/hooks'

interface AddButtonProps {
  productId: string
}

export const AddButton: React.FC<AddButtonProps> = ({ productId }: AddButtonProps) => {
  const { mutate: addToCart, isPending: addToCartIsPending } = useCartAdd()

  return (
    <CustomButton disabled={addToCartIsPending} onClick={() => addToCart(productId)}>
      {ICONS.buy()}
      <p>В кошик</p>
    </CustomButton>
  )
}
