'use client'

import { toast } from 'react-toastify'

import { subscribeSchema } from '@/utils/validators/subscribe-validator'

export const SubscribeForm: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const parseResult = subscribeSchema.safeParse(email)

    if (parseResult.success) {
      toast.success('Дякуємо за підписку!')
      return
    }

    toast.error(parseResult.error.issues[0].message)
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type='email' name='email' placeholder='Ведіть свій E-mail' />
      <button type='submit'>Підписатися</button>
    </form>
  )
}
