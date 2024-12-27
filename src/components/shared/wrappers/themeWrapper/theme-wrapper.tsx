'use client'

import { ThemeProvider } from '@mui/material'

import theme from './theme'

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
