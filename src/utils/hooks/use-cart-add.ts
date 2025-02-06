import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { createCartItem } from '../lib/actions/cart-item'

export const useCartAdd = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCartItem,
    onSuccess: ({ error }) => {
      if (error)
        toast.error(
          error.includes('prisma') ? 'Помилка підключення до БД. Спробуйте через 10 хвилин' : error,
        )
      else {
        toast.success('Товар був доданий до кошику')
        queryClient.invalidateQueries({
          queryKey: ['cart'],
        })
      }
    },
  })
}
