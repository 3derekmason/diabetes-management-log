import express from 'express'

import { knex, setupDb } from './sqlite'

const app = express()

// Test ping
app.get('/ping', (_, res) => {
  res.send('ok')
})

app.get('/entity', (req, res) => {})
app.post('/entity', async (req, res) => {
  try {
    await knex('entity').insert({ id: 123, age: 123, name: 'test' })
    res.send('ok')
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})
app.delete('/entity/:id', async (req, res) => {
  try {
    await knex('entity').where({ id: 123 }).del()
    res.send('ok')
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

app.get('/entity/:id', async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.sendStatus(400)
    return
  }

  try {
    const item = await knex('entity').where({ id: Number(id) })
    if (item) return res.status(200).send(item)
    else return res.sendStatus(404)
  } catch (e) {
    console.log('e', e)
    return res.sendStatus(500)
  }
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
