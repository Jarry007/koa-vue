const db = require('../models/db')
const _login = require('../models/login')

const index = async (ctx) => {
    ctx.response.body = '首页'
}

const loginIt = async (ctx) => {
    const { username, password } = ctx.request.body
    try {
        const loginInfo = await _login.login(username, password)
        ctx.response.body = {
            code: 200,
            message: '登录成功'
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error || '错误'
        }
    }


}

const registerIt = async (ctx) => {
    const { username, password } = ctx.request.body
    try {
        const user = await _login.register(username, password)

        console.log('注册信息', user)
        ctx.response.body = {
            code: 200,
            message: '成功'
        }
    } catch (error) {
        console.log('err', error)
        ctx.response.body = {
            code: 500,
            message: error || '错误'
        }
    }

}

const loginPage = async (ctx, next) => {
    console.log('loginPage', ctx)

}

module.exports = {
    loginIt, loginPage, index, registerIt
}