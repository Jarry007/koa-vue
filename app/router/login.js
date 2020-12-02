const Router = require('koa-router')
const router = new Router()
const controller = require('../control/login')

router.get('/',controller.index)
router.post('/login',controller.loginIt)
router.get('/login-page',controller.loginPage)
router.post('/register',controller.registerIt)

router.post('/register2',controller.requeRegister)
router.post('/login2',controller.requeLogin)

module.exports = router