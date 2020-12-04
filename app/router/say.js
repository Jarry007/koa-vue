const Router = require('koa-router')
const router = new Router()
const controller = require('../control/say')
const token = require('../token/token')


// router.post('/say',token.checkToken,controller.sayIt)
// router.get('/get-list',token.checkToken, controller.sayList)
// router.post('/agree',token.checkToken,controller.agreeSay)

router.get('/get-list',token.checkToken, controller.reSayList)
router.post('/say',token.checkToken,controller.requeSay)
router.post('/agree',token.checkToken,controller.requeAgree)
module.exports = router