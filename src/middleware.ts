import { $Enums } from '@prisma/client'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

import { LINKS } from './utils/config/links'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token

    if (!token || token.role !== $Enums.UserRole.admin) {
      return NextResponse.redirect(new URL(LINKS.Home, req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: LINKS.Home,
    },
  },
)

export const config = {
  matcher: ['/admin', '/create-product', '/update-product:id'],
}
