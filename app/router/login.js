const Router = require('koa-router')
const router = new Router()
const controller = require('../control/login')
const userContor = require('../control/user')
const token = require('../token/token')

router.get('/',controller.index)
// router.post('/login',controller.loginIt)
router.get('/login-page',controller.loginPage)
// router.post('/register',controller.registerIt)

router.post('/register',controller.requeRegister)
router.post('/login',controller.requeLogin)
router.get('/about',token.checkToken,userContor.userInfo)
module.exports = router