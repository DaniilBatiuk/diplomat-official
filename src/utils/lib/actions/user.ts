'use server'

import { hashSync } from 'bcrypt'
import { revalidateTag } from 'next/cache'

import { getUserSession } from '@/utils/helpers/get-user-session'
import { prisma } from '@/utils/lib/db'
import { validatedAction } from '@/utils/lib/middleware'
import { registerSchema, updateUserSchema } from '@/utils/validators/user-validator'

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

export const updateUser = validatedAction(updateUserSchema, async userData => {
  const user = await getUserSession()

  if (!user) {
    return {
      errors: {
        message: 'Користувача не знайдено',
      },
      inputs: userData,
      success: false,
    }
  }

  const userExist = await prisma.user.findFirst({
    where: {
      email: userData.email,
    },
  })

  if (userExist && userExist.id !== user.id) {
    return {
      errors: {
        message: 'Користувача з таким E-mail вже існує',
      },
      inputs: userData,
      success: false,
    }
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      ...userData,
    },
  })

  revalidateTag(`user-${user?.id}`)

  return {
    errors: {},
    inputs: userData,
    success: true,
  }
})
