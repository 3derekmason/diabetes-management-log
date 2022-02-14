import type { Express } from 'express'

import { entityRouteHandlers } from './entity'

export const setupRoutes = (app: Express) => {
  entityRouteHandlers(app)
}