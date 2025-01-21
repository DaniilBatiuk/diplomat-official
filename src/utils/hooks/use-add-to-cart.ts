import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { createCartItem } from '../lib/actions/cart-item'

export const useAddToCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCartItem,
    onSuccess: () => {
      toast.success('Товар був доданий до кошику')
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
    },
    onError: (error: any) => {
      toast.error(error.message || 'Помилка додавання товару')
    },
  })
}
