import { router } from '@/routes/router'

router.get('/', ctx => {
  ctx.body = 'Hello World'
})