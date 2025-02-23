import NextAuth from 'next-auth'

import { authOptions } from '@/utils/constants/auth-options'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
