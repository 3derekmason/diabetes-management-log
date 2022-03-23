import { FC, useEffect, useState } from 'react'

import './styles/App.css'
import client from './client'

import Home from './components/Home.jsx'

const App: FC = () => {
  const [entries, setEntries] = useState([])

  const getAllEntries = async () => {
    await client.get('/entries').then(res => setEntries(res.data))
  }
  useEffect(() => {
    getAllEntries()
  }, [entries])

  return (
    <div className='app'>
      <Home />
    </div>
  )
}

export default App
