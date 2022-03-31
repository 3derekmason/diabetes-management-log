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
  const res = await db('entries').orderBy('id', 'desc')
  res.json(data)
})
app.post('/entries', async (req, res) => {
  // create a single entry
  const entry = { date: req.body.date, value: req.body.value, comment: req.body.comments }
  const res = await db('entries').insert(entry)
  res.status(201)
})
app.delete('/entries/:id', async (req, res) => {
  // delete a single entry
  const res = await db('entries').select('*').where('id', req.params.id).del()
  res.status(200)
  console.log('Entry removed...')
})
app.put('/entries/:id', async (req, res) => {
  // update a single entry
  const res = await db('entries')
    .update('value', req.body.value)
    .where('id', req.params.id)
    .update('comment', req.body.comments)
    .where('id', req.params.id)
})

app.get('/desc', async (req, res) => {
  // grab all entries and order by descending value
  const res = await db('entries').orderBy('value', 'desc')
  res.json(data)
})

app.get('/asc', async (req, res) => {
  // grab all entries and order by ascending value
  const res = await db('entries').orderBy('value', 'asc')
  res.json(data)
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
