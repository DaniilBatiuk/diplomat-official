import { z } from 'zod'

export const subscribeSchema = z
  .string()
  .nonempty("Поле E-mail є обов'язковим")
  .email('Введіть коректно E-mail')
