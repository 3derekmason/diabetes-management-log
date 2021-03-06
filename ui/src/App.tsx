import { FC, useEffect, useState } from 'react'

import './styles/App.css'
import client from './client'

import AppContext from './context.js'
import Welcome from './components/Welcome'
import Home from './components/Home.jsx'

const App: FC = () => {
  const [entries, setEntries] = useState()
  // boolean to toggle order of results
  const [lowVal, setLowVal] = useState(false)
  const [highVal, setHighVal] = useState(false)

  // set current entries
  const getAllEntries = async () => {
    const res = await client.get('/entries')
    setEntries(res.data)
  }
  // reorder current entries
  const getHighToLow = async () => {
    const res = await client.get('/desc')
    setEntries(res.data)
  }
  const getLowToHigh = async () => {
    const res = await client.get('/asc')
    setEntries(res.data)
  }

  // conditionaly grab all entries
  useEffect(() => {
    lowVal ? getLowToHigh() : highVal ? getHighToLow() : getAllEntries()
  }, [entries, lowVal, highVal])

  return (
    <AppContext.Provider value={{ entries, setEntries, getAllEntries, setLowVal, setHighVal }}>
      <div className='app'>
        <Welcome />
        <Home />
      </div>
    </AppContext.Provider>
  )
}

export default App
