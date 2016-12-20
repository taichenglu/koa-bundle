const router = require('koa-router')()
const routerCtrl = require('../controllers/router')

router.get('/', routerCtrl)

module.exports = router
