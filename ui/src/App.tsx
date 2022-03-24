import { FC, useEffect, useState, useRef } from 'react'

import './styles/App.css'
import client from './client'

import AppContext from './context.js'
import Home from './components/Home.jsx'

const App: FC = () => {
  const [entries, setEntries] = useState()
  const [lowVal, setLowVal] = useState(false)
  const [highVal, setHighVal] = useState(false)

  const getAllEntries = async () => {
    await client.get('/entries').then(res => setEntries(res.data))
  }
  const getHighToLow = async () => {
    await client.get('/desc').then(res => setEntries(res.data))
  }
  const getLowToHigh = async () => {
    await client.get('/asc').then(res => setEntries(res.data))
  }

  useEffect(() => {
    if (lowVal) {
      getLowToHigh()
    } else if (highVal) {
      getHighToLow()
    } else {
      getAllEntries()
    }
  }, [entries])

  return (
    <AppContext.Provider value={{ entries, setEntries, getAllEntries, setLowVal, setHighVal }}>
      <div className='app'>
        <Home />
      </div>
    </AppContext.Provider>
  )
}

export default App
