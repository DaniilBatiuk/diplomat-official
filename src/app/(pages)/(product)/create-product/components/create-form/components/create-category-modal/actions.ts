'use server'

import { prisma } from '@/utils/lib/db'

export async function createCategory({ name }: { name: string }) {
  const categoryExist = await prisma.category.findUnique({
    where: {
      name,
    },
  })

  if (categoryExist) {
    throw new Error('Категорія з цією назвою вже існує.')
  }

  const newCategory = await prisma.category.create({
    data: {
      name,
    },
  })

  return { newCategory }
}
