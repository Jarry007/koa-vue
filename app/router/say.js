const Router = require('koa-router')
const router = new Router()
const controller = require('../control/say')
const token = require('../token/token')


router.post('/say',token.checkToken,controller.sayIt)
router.get('/get-list',token.checkToken, controller.sayList)
router.post('/agree',token.checkToken,controller.agreeSay)

module.exports = router