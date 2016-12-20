const Koa = require('koa')
const router = require('./routes/router')

const app = new Koa()

// router
app.use((ctx, next) => {
  return router.routes()(ctx, next)
})

app.listen(3000)
