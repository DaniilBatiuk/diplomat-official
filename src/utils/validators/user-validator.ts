import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(4, 'Пароль має містити мінімум 4 символи')
  .nonempty("Поле пароль є обов'язковим")

export const loginSchema = z.object({
  email: z.string().email('Введіть коректно почту').nonempty("Поле E-mail є обов'язковим"),
  password: passwordSchema,
})

export const registerSchema = loginSchema
  .merge(
    z.object({
      name: z
        .string()
        .min(2, "Ім'я  має містити мінімум 2 символи")
        .nonempty("Поле ім'я є обов'язковим"),
      surname: z
        .string()
        .min(2, 'Прізвище має містити мінімум 2 символи')
        .nonempty("Поле прізвище є обов'язковим"),
      confirmPassword: passwordSchema,
    }),
  )
  .refine(data => data.password === data.confirmPassword, {
    message: 'Паролі не співпадають',
    path: ['confirmPassword'],
  })

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(2, "Ім'я  має містити мінімум 2 символи")
    .nonempty("Поле ім'я є обов'язковим"),
  surname: z
    .string()
    .min(2, 'Прізвище має містити мінімум 2 символи')
    .nonempty("Поле прізвище є обов'язковим"),
  email: z.string().email('Введіть коректно почту').nonempty("Поле E-mail є обов'язковим"),
})

export type LoginType = z.infer<typeof loginSchema>
export type RegisterType = z.infer<typeof registerSchema>
export type UpdateUserType = z.infer<typeof updateUserSchema>
