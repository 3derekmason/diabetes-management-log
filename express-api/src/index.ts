import express from 'express'

import { setupRoutes } from '@/routes'

const app = express()

setupRoutes(app)

app.listen(5010, () => {
  console.log('🚀 Skynet is active')
})