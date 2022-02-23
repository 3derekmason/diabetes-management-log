import express from 'express'
import cors from 'cors'

import { setupDb } from './sqlite'

const app = express()
app.use(cors())

/**
 * Test ping, this is used by the UI to determine if they are connected properly.
 * Once you see the connected message on the UI, you can remove this if you want to.
 */
app.get('/ping', (_, res) => {
  res.send('pong')
})

app.get('/entity', (req, res) => {
  // fetch many entities
})
app.post('/entity', (req, res) => {
  // create a single entity
})
app.delete('/entity/:id', (req, res) => {
  // delete a single entity
})
app.get('/entity/:id', (req, res) => {
  // fetch a single entity
})

app.listen(5010, async () => {
  try {
    await setupDb()
    console.log('🚀 Skynet is active')
  } catch (e) {
    console.error(e)
    throw new Error('There was an issue setting up the DB')
  }
})
