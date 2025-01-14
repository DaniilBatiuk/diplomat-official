import { z } from 'zod'

export const categoryScheme = z.object({
  name: z
    .string()
    .min(2, 'Назва має містити не менше 2 символів')
    .max(50, 'Назва має містити не більше 50 символів'),
})

export type CreateCategory = z.infer<typeof categoryScheme>
