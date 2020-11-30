const jwt = require('jsonwebtoken')
const secretKey = require('../../config/token-secret')

const clearToken = async (ctx, next) => {
    const author = ctx.get('Authorization')

    if (!author) {
        ctx.body = {
            code: '401',
            message: '未登录'
        }

        return false
    }

    try {
        const getT_ = await jwt.verify(author, secretKey)
        ctx.body = {
            code: '200',
            message: '校验成功',
            data: getT_
        }
        next()

    } catch (error) {
        ctx.body = {
            code: 500,
            message: '校验失败'
        }
    }

}


const setToken = (user) => {
    return jwt.sign({
        user: user.name,
    },
        secretKey,
        { expiresIn: '24h' }
    )
}

const checkToken = async (ctx, next) => {
    const author = ctx.get('Authorization')
    console.log('at', author)
    if (!author) {
        ctx.body = {
            code: '401',
            message: '未登录'
        }

        return false
    }

    try {
        const verify_ = await jwt.verify(author, secretKey)
        // console.log('verify_',verify_)
        ctx.userInfo = verify_
        await next()

    } catch (error) {
        ctx.body = {
            code: 500,
            message: '校验失败'
        }
    }

}

module.exports = {
    clearToken, setToken, checkToken
}