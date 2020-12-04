
const token = require('../token/token')
const md5 = require('../../util/md5')
const userBase = require('../models/user-database')

const index = async (ctx) => {
    ctx.response.body = '首页'
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
            const _token = token.setToken(loginInfo)
            ctx.body = {
                code: 200,
                message: '登录成功',
                data: _token
            }
        } else {
            throw new Error('尚未注册')
        }
    } catch (error) {
        ctx.body = {
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

        await userBase.create({
            name: username,
            pass: password
        })

        // userB.name = username
        // userB.pass = password
        // userB.save()
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    } catch (error) {
        ctx.body = {
            code: 500,
            message: error.message || '注册失败'
        }
    }
}



const loginPage = async (ctx, next) => {
    console.log('loginPage', ctx)

}


module.exports = {
    requeLogin, loginPage, index, requeRegister
}