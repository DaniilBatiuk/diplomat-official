import { useQueryClient } from '@tanstack/react-query'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'

import { setCartToken } from '@/utils/lib/actions/cart'

import { LoginType } from '@/utils/validators/user-validator'

interface UseSubmitProps {
  onClickClose: () => void
}

export const useSubmit = ({ onClickClose }: UseSubmitProps) => {
  const queryClient = useQueryClient()
  const onSubmit = async (data: LoginType) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      })

      if (!resp?.ok) {
        throw new Error()
      }

      await setCartToken()
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
      onClickClose()

      toast.success('Вы успешно вошли в аккаунт')
    } catch (error) {
      toast.error('Не удалось войти в аккаунт')
    }
  }

  return { onSubmit }
}
