import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@/providers'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
