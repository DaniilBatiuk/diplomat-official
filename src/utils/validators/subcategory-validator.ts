import { z } from 'zod'

export const subCategoryScheme = z.object({
  name: z
    .string()
    .min(2, 'Назва має містити не менше 2 символів')
    .max(50, 'Назва має містити не більше 50 символів')
    .nonempty("Поле назва є обов'язковим"),
  categoryId: z
    .string()
    .cuid('Категорія має бути вибрана')
    .nonempty("Поле категорії є обов'язковим"),
})

export type CreateSubCategory = z.infer<typeof subCategoryScheme>
