import { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const brandColor = '#00b8d4'
const muiTheme = createTheme({
  palette: {
    primary: {
      main: brandColor
    },
    error: {
      main: 'rgb(232, 51, 51)'
    },
    success: {
      main: 'rgb(76,175,80)'
    }
  }
})
