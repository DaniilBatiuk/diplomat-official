// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation
import type { UserRole } from '@prisma/client'
import { DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: UserRole
      name: string
      surname: string
      email: string
    }
  }

  interface User extends DefaultUser {
    id: string
    role: UserRole
    name: string
    surname: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string
    role: UserRole
  }
}
