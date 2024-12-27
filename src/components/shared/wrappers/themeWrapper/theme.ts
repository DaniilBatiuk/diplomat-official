import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: '11px',
          fontWeight: 600,
          top: '3px',
        },
      },
    },
  },
})

export default theme
