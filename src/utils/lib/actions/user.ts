'use server'

import { hashSync } from 'bcrypt'

import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { registerSchema } from '@/utils/validators/user-validator'

export const registerUser = validatedAction(registerSchema, async userData => {
  const { password, confirmPassword, ...userDataToCreate } = userData
  const userExist = await prisma.user.findFirst({
    where: {
      email: userData.email,
    },
  })

  if (userExist) {
    return {
      errors: {
        message: 'Користувач з таким E-mail вже існує',
      },
      inputs: userData,
      success: false,
    }
  }

  await prisma.user.create({
    data: {
      ...userDataToCreate,
      passwordHash: hashSync(password, 10),
    },
  })

  return {
    errors: {},
    inputs: userData,
    success: true,
  }
})
