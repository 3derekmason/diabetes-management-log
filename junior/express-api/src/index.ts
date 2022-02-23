import express from 'express'

import { getById } from './elastic-search'
import type { Entity } from './interfaces'

const app = express()

// Test ping
app.get('/ping', (_, res) => {
  res.send('ok')
})

app.get('/entities', (req, res) => {})

app.get('/entity/:id', async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.sendStatus(400)
    return
  }

  try {
    const item = await getById<Entity>(id)
    if (item) return res.status(200).send(item)
    else return res.sendStatus(404)
  } catch (e) {
    return res.sendStatus(500)
  }
})

app.listen(5010, () => {
  console.log('🚀 Skynet is active')
})
