import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { changeProductStatus } from '../lib/actions/product'

export const useProductChangeStatus = () => {
  return useMutation({
    mutationFn: changeProductStatus,
    onSuccess: () => {
      toast.success('Статус успішно змінено')
    },
    onError: error => {
      toast.error(error.message)
    },
  })
}
