// const db = require('../models/db')
const _login = require('../models/login')
const token = require('../token/token')
const md5 = require('../../util/md5')
const userBase = require('../models/user-database')

const index = async (ctx) => {
    ctx.response.body = '首页'
}



const loginIt = async (ctx) => {
    const { username, password } = ctx.request.body
    try {
        const loginInfo = await _login.login(username, password)
        // console.log('loginToken',loginInfo)
        const _token = token.setToken(loginInfo[0])

        ctx.response.body = {
            code: 200,
            message: '登录成功',
            data: _token
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error || '错误'
        }
    }


}

const requeLogin = async (ctx) => {
    const { username, password } = ctx.request.body

    try {
        const md5pass = md5(password)
        const loginInfo = await userBase.findOne({
            where: {
                name: username,
                pass: md5pass
            }
        })
        if (loginInfo) {
            // console.log(loginInfo)
            const _token = token.setToken(loginInfo)
            ctx.response.body = {
                code: 200,
                message: '登录成功',
                data: _token
            }
        } else {
            throw new Error('尚未注册')
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error.message || '登录失败'
        }
    }
}

const requeRegister = async (ctx) => {
    const { username, password } = ctx.request.body
    try {
        const md5pass = md5(password)
        const user = await userBase.findOne({
            where: {
                name: username,
                pass: md5pass
            }
        })

        if (user) {
            throw new Error('该用户已被注册')
        }

        const userB = new userBase()

        userB.name = username
        userB.pass = password
        userB.save()
        ctx.response.body = {
            code: 200,
            message: '注册成功'
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error.message || '注册失败'
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
            message: error.message || '错误'
        }
    }

}


const loginPage = async (ctx, next) => {
    console.log('loginPage', ctx)

}

module.exports = {
    requeLogin, loginIt, loginPage, index, registerIt, requeRegister
}