import { NextResponse } from 'next/server'

import { prisma } from '@/utils/lib/db'

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`
    return NextResponse.json({ message: 'DB is alive' })
  } catch (error) {
    return NextResponse.json({ error: 'DB ping failed' }, { status: 500 })
  }
}
