import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { deleteCartItem } from '../lib/actions/cart-item'

export const useCartItemDelete = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string, { previousCart?: ICartDto }>({
    mutationFn: deleteCartItem,
    onMutate: async cartItemId => {
      await queryClient.cancelQueries({ queryKey: ['cart'] })

      const previousCart = queryClient.getQueryData<ICartDto>(['cart'])

      if (previousCart) {
        queryClient.setQueryData<ICartDto>(['cart'], {
          ...previousCart,
          items: previousCart.items.filter(item => item.id !== cartItemId),
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
