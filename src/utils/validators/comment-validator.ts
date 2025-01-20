import { z } from 'zod'

export const commentScheme = z.object({
  title: z
    .string()
    .min(2, 'Заголовок має містити не менше 2 символів')
    .max(100, 'Заголовок має містити не більше 100 символів')
    .nonempty("Поле заголовон є обов'язковим"),
  comment: z
    .string()
    .min(5, 'Відгук має містити не менше 5 символів')
    .max(500, 'Відгук має містити не більше 500 символів')
    .nonempty("Поле відгук є обов'язковим"),
  starCount: z.preprocess(value => parseInt(String(value)), z.number().min(1).max(5)),
  recommend: z.preprocess(value => Boolean(value), z.boolean().optional()),
  userId: z.string().cuid(),
  productId: z.string().cuid(),
})

export type CreateComment = z.infer<typeof commentScheme>
