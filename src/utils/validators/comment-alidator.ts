import { z } from 'zod'

export const commentScheme = z.object({
  title: z
    .string()
    .min(2, 'Заголовок має містити не менше 2 символів')
    .max(100, 'Заголовок має містити не більше 100 символів'),
  comment: z
    .string()
    .min(5, 'Відгук має містити не менше 5 символів')
    .max(500, 'Відгук має містити не більше 500 символів'),
  starCount: z.string(),
  recommend: z.string().optional(),
  userId: z.string().cuid(),
  productId: z.string().cuid(),
})

export type CreateComment = z.infer<typeof commentScheme>
