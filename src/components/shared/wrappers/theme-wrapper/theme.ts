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
  palette: {
    primary: {
      main: '#f1a84d',
      contrastText: '#fff',
    },
    action: {
      hover: '#f8e9d6',
      selectedOpacity: 0.4,
    },
    background: {
      default: '#f9f4ee',
      paper: '#f9f4ee',
    },
  },
})

export default theme
