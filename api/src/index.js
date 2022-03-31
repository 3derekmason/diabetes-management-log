import express from 'express'
import cors from 'cors'

import { setupDb } from './sqlite'
import { db } from './sqlite'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/entries', async (req, res) => {
  // get all entries
  await db('entries')
    .orderBy('id', 'desc')
    .then(data => res.json(data))
})
app.post('/entries', async (req, res) => {
  // create a single entry
  const entry = { date: req.body.date, value: req.body.value, comment: req.body.comments }
  await db('entries').insert(entry).then(res.status(201))
})
app.delete('/entries/:id', async (req, res) => {
  // delete a single entry
  const res = await db('entries').select('*').where('id', req.params.id).del()
  res.status(200)
  console.log('Entry removed...')
})
app.put('/entries/:id', async (req, res) => {
  await db('entries')
    .update('value', req.body.value)
    .where('id', req.params.id)
    .update('comment', req.body.comments)
    .where('id', req.params.id)
    .then(res.status(200))
})

app.get('/desc', async (req, res) => {
  // grab all entries and order by descending value
  await db('entries')
    .orderBy('value', 'desc')
    .then(data => res.json(data))
})

app.get('/asc', async (req, res) => {
  // grab all entries and order by ascending value
  await db('entries')
    .orderBy('value', 'asc')
    .then(data => res.json(data))
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
