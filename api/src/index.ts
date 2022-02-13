import Koa from 'koa'

import { router } from '@/routes'

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    const error = err as WholisticError
    console.log(error.status)
    ctx.status = error.status || 500
    ctx.body = error.message
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(5010, '0.0.0.0')

interface WholisticError {
  message: string
  status?: number
}
