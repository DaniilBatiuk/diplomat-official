// src/prisma/prismaMiddleware.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Middleware для логирования времени выполнения запросов
prisma.$use(async (params, next) => {
  const before = Date.now() // Время до выполнения запроса
  const result = await next(params) // Выполнение запроса
  const after = Date.now() // Время после выполнения запроса

  console.log(`Query took ${after - before}ms: ${params.model} - ${params.action}`)
  return result
})

export default prisma
