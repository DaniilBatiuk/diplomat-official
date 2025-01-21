import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { calculateTotalPrice } from '../helpers'
import { updateCartItem } from '../lib/actions/cart-item'

export const useCartItemUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, { id: string; quantity: number }, { previousCart?: ICartDto }>({
    mutationFn: updateCartItem,
    onMutate: async cartItem => {
      await queryClient.cancelQueries({ queryKey: ['cart'] })

      const previousCart = queryClient.getQueryData<ICartDto>(['cart'])

      if (previousCart) {
        queryClient.setQueryData(['cart'], {
          ...previousCart,
          items: previousCart.items.map(item =>
            item.id === cartItem.id
              ? { ...item, quantity: (item.quantity = cartItem.quantity) }
              : item,
          ),
          totalPrice: calculateTotalPrice(previousCart),
        })
      }
      return { previousCart }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
    },
    onError: (err, variables, context) => {
      toast.error(err.message)

      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart)
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}
