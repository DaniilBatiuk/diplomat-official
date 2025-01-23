import { compare, hashSync } from 'bcrypt'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from '../lib/db'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const values = {
          email: credentials.email,
        }

        const findUser = await prisma.user.findFirst({
          where: values,
        })

        if (!findUser) {
          return null
        }

        const isPasswordValid = await compare(credentials.password, findUser.passwordHash)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: findUser.id,
          email: findUser.email,
          name: findUser.name,
          surname: findUser.surname,
          role: findUser.role,
          cartId: findUser.cartId,
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === 'credentials') {
          return true
        }

        if (!user.email) {
          return false
        }

        const findUser = await prisma.user.findFirst({
          where: {
            OR: [
              { provider: account?.provider, providerId: account?.providerAccountId },
              { email: user.email },
            ],
          },
        })

        if (findUser) {
          await prisma.user.update({
            where: {
              id: findUser.id,
            },
            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          })

          return true
        }

        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name || '',
            surname: user.surname || '',
            passwordHash: hashSync(user.id.toString(), 10),
            provider: account?.provider,
            providerId: account?.providerAccountId,
          },
        })

        return true
      } catch (error) {
        console.error('Error [SIGNIN]', error)
        return false
      }
    },
    async jwt({ token }) {
      if (!token.email) {
        return token
      }

      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (findUser) {
        token.id = findUser.id
        token.email = findUser.email
        token.name = findUser.name
        token.surname = findUser.surname
        token.role = findUser.role
        token.cartId = findUser.cartId
      }

      return token
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.cartId = token.cartId
      }

      return session
    },
  },
}
