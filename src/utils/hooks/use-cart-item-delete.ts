import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { deleteCartItem } from '../lib/actions/cart-item'

export const useCartItemDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteCartItem,
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
