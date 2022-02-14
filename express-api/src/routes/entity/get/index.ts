import type { RequestHandler } from 'express'

import { getById } from '@/elastic-search'
import type { Entity } from '@/interfaces'

export const getEntity: RequestHandler = async (req, res) => {
  const id = req.params.id
  if (id === undefined) {
    res.sendStatus(400)
    return
  }

  const item = await getById<Entity>(id)
  if (item) return res.status(200).send(item)
  else return res.sendStatus(404)
}
