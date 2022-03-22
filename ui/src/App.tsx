import { FC, useEffect, useState } from 'react'

import { client } from './client'
import './styles/App.css'

import Home from './components/Home.jsx'

const App: FC = () => {
  return (
    <div className='app'>
      <Home />
    </div>
  )
}

export default App
