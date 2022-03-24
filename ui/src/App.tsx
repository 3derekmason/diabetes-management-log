import { FC, useEffect, useState } from 'react'

import './styles/App.css'
import client from './client'

import AppContext from './context.js'
import Home from './components/Home.jsx'

const App: FC = () => {
  const [entries, setEntries] = useState()

  const getAllEntries = async () => {
    await client.get('/entries').then(res => setEntries(res.data))
  }
  useEffect(() => {
    getAllEntries()
  }, [entries])

  return (
    <AppContext.Provider value={{ entries, setEntries, getAllEntries }}>
      <div className='app'>
        <Home />
      </div>
    </AppContext.Provider>
  )
}

export default App
