import express from 'express'
import cors from 'cors'

import { setupDb } from './sqlite'
import knex from './sqlite'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send({ data: 12345 })
})

app.get('/entries', (req, res) => {
  // const query = 'SELECT * FROM entries'
  // knext.query(query, (err, data) => {
  //   if (err) console.log(err)
  //   res.status(200).json(data.rows)
  // })
  res.send({ hello: 'world' })
})
app.post('/entry', (req, res) => {
  // create a single entity
})
app.delete('/entry/:id', (req, res) => {
  // delete a single entity
})
app.get('/entry/:id', (req, res) => {
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
