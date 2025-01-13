'use client'

import { ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'

import theme from './theme'

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer stacked /> {children}
    </ThemeProvider>
  )
}
