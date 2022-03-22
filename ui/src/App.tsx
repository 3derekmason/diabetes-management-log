import { FC, useEffect, useState } from 'react'

import { client } from './client'
import './styles/App.css'

import Home from './components/Home.jsx'

const App: FC = () => {
  const statusMessage = useStatusMessage()
  return (
    <div className='app'>
      <div className='app-banner'>{statusMessage}</div>
    </div>
  )
}

/**
 * This is a hook to determine whether or not the API is connected.
 * You'll need the API to complete the challenge,
 * so this is a little helper to make sure everything is wired up properly.
 *
 * Once you see that the API is connected properly, you can remove this hook as it's no longer needed. */
const useStatusMessage = () => {
  const [isApiConnected, setIsApiConnected] = useState(false)
  useEffect(() => {
    const testApiPing = async () => {
      try {
        const result = await client.get('/ping')
        if (result.data === 'pong') setIsApiConnected(true)
      } catch (e) {
        setIsApiConnected(false)
      }
    }
    testApiPing()
  }, [])

  const statusMessage = isApiConnected ? (
    <Home />
  ) : (
    'The API is not connected. \nPlease follow the instructions in the API folder to start up the server'
  )
  return statusMessage
}

export default App
