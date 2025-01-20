import { z } from 'zod'

export const productScheme = z.object({
  name: z
    .string()
    .nonempty("Поле назва є обов'язковим")
    .min(2, 'Назва має містити не менше 2 символів')
    .max(100, 'Назва має містити не більше 100 символів'),
  description: z
    .string()
    .nonempty("Поле опис є обов'язковим")
    .min(10, 'Опис має містити не менше 10 символів')
    .max(500, 'Опис має містити не більше 500 символів'),
  price: z.preprocess(value => {
    if (isNaN(Number(value))) {
      throw new Error('Ціна має бути числом')
    }
    return Number(value)
  }, z.number().positive('Ціна має бути додатнім числом')),
  count: z.preprocess(value => {
    if (isNaN(Number(value))) {
      throw new Error('Кількість має бути числом')
    }
    return Number(value)
  }, z.number().positive('Кількість має бути додатнім числом')),
  discountPercent: z.preprocess(
    value => {
      if (isNaN(Number(value))) {
        throw new Error('Кількість має бути числом')
      }
      return Number(value)
    },
    z
      .number()
      .positive('Кількість має бути додатнім числом')
      .max(100, 'Знижка не може бути більше 100%'),
  ),
  properties: z.array(
    z.object({
      name: z
        .string()
        .nonempty("Поле властивості є обов'язковим")
        .min(2, 'Властивість має містити не менше 2 символів')
        .max(100, 'Властивість має містити не більше 100 символів'),
      value: z
        .string()
        .nonempty("Поле значення є обов'язковим")
        .min(2, 'Значення має містити не менше 2 символів')
        .max(100, 'Значення має містити не більше 100 символів'),
    }),
  ),
})

export type CreateProduct = z.infer<typeof productScheme>
