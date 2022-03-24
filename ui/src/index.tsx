import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './styles/index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#84ffff'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
