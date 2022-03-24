import express from 'express'
import cors from 'cors'

import { setupDb } from './sqlite'
import { db } from './sqlite'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ data: 12345 })
})

app.get('/entries', async (req, res) => {
  // get all entries
  await db
    .select('*')
    .from('entries')
    .then(data => res.json(data))
})
app.post('/entries', async (req, res) => {
  // create a single entity
  const entry = { date: req.body.date, value: req.body.value, comment: req.body.comments }
  await db('entries').insert(entry).then(res.status(201))
})
app.delete('/entries/:id', async (req, res) => {
  // delete a single entity
  await db('entries').select('*').where('id', req.params.id).del().then(res.status(201))
})
app.get('/entries/:id', (req, res) => {
  // fetch a single entity
})

app.listen(5010, async () => {
  try {
    await setupDb()
    console.log('🚀 Skynet is active, listening on 5010')
  } catch (e) {
    console.error(e)
    throw new Error('There was an issue setting up the DB')
  }
})
