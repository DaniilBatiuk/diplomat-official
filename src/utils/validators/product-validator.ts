import { z } from 'zod'

export const productScheme = z.object({
  name: z
    .string()
    .min(2, 'Назва має містити не менше 2 символів')
    .max(100, 'Назва має містити не більше 100 символів'),
  description: z
    .string()
    .min(10, 'Опис має містити не менше 10 символів')
    .max(500, 'Опис має містити не більше 500 символів'),
  price: z.string().min(1, 'Ціна має бути вибрана'),
  count: z.string().min(1, 'Кількість має бути вибрана'),
  discountPercent: z.union([z.string(), z.number()]).optional(),
  // subcategoryId: z.string().cuid('Підкатегорія має бути вибрана'),
  // categoryId: z.string().cuid('Категорія має бути вибрана'),
  properties: z.array(
    z.object({
      name: z
        .string()
        .min(2, 'Властивість має містити не менше 2 символів')
        .max(100, 'Властивість має містити не більше 100 символів'),
      value: z
        .string()
        .min(2, 'Значення має містити не менше 2 символів')
        .max(100, 'Значення має містити не більше 100 символів'),
    }),
  ),
})

export type CreateProduct = z.infer<typeof productScheme>
