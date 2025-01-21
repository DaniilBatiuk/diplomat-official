import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { updateCartItem } from '../lib/actions/cart-item'

export const useCartItemUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
    },
    onError: error => {
      toast.error(error.message)
    },
  })
}
