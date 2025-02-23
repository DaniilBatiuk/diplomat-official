import { Inter, Lora } from 'next/font/google'

import { QueryWrapper } from '@/components/shared/wrappers/query-wrapper/query-wrapper'

import '@/styles/globals.scss'

import { searchDataCreate } from './(root)/helpers/search-data-create'
import { Footer, Header, ThemeWrapper } from '@/components'
import { getActiveProducts, getCategories } from '@/utils/lib/queries'

const interSans = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const loraMono = Lora({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const allCategories = await getCategories()
  const activeProducts = await getActiveProducts()

  const searchData = searchDataCreate(allCategories, activeProducts)

  return (
    <html lang='en'>
      <body className={`${interSans.variable} ${loraMono.variable}`}>
        <ThemeWrapper>
          <QueryWrapper>
            <div className='wrapper' id='wrapper'>
              <Header allCategories={allCategories} searchData={searchData} />
              <main>{children}</main>
              <Footer />
            </div>
          </QueryWrapper>
        </ThemeWrapper>
      </body>
    </html>
  )
}
