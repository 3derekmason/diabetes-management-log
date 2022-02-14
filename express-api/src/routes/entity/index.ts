import type { Express } from 'express'

import { getEntity } from './get'

export const entityRouteHandlers = (app: Express) => {
  app.get('/entity/:id', getEntity)
}
