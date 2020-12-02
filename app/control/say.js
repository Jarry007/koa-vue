const say = require('../models/say')
const relationBase = require('../models/useragree')
const listBase = require('../models/list-database')

const requeSay = async (ctx) => {
    const { uuid } = ctx.userInfo
    const { says } = ctx.request.body
    console.log(uuid,says)
    try {
        const listB = new listBase()
        listB.userid = uuid
        listB.says = says
        await listB.save()
        ctx.response.body = {
            code: 200,
            message: '成功'
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error.message || '错误'
        }
    }
}
const sayIt = async (ctx) => {
    const { user, says } = ctx.request.body
    try {
        await say.says(user, says)
        ctx.response.body = {
            code: 200,
            message: '成功'
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error || '错误'
        }
    }
}

const sayList = async (ctx) => {
    // console.log('ctx', ctx.userInfo)
    const { user } = ctx.userInfo

    try {
        const list = await say.search(user)
        ctx.response.body = {
            code: 200,
            message: '成功',
            data: list
        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error || '错误'
        }
    }
}

const requeAgree = async (ctx) => {
    const { uuid } = ctx.userInfo
    let { sayid } = ctx.request.body
    try {
        const hasAgreen = await relationBase.findOne({
            where: {
                userid: uuid,
                sayid: sayid
            }
        })

        if (hasAgreen) {
            await relationBase.destroy({
                where: {
                    userid: uuid,
                    sayid: sayid
                }
            })
            ctx.response.body = {
                code: 200,
                message: '取消成功'
            }

        } else {
            const relationB = new relationBase()
            relationB.userid = uuid
            relationB.sayid = sayid
            await relationB.save()
            ctx.response.body = {
                code: 200,
                message: '赞同成功'
            }

        }
    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error.message || '错误'
        }
    }
}
const agreeSay = async (ctx) => {
    const { userid } = ctx.userInfo
    let { sayid } = ctx.request.body
    parseInt(sayid)
    console.log(ctx.userInfo, sayid)
    try {
        const hasAgreen = await say.agreeSearch(userid, sayid)
        console.log('has', hasAgreen)
        if (hasAgreen.length) {
            await say.abolishAgree(userid, sayid)
            ctx.response.body = {
                code: 200,
                message: '取消成功'
            }
        } else {
            await say.insertAgree(userid, sayid)
            ctx.response.body = {
                code: 200,
                message: '赞同成功'
            }
        }
        // await say.agree(userid, sayid)

    } catch (error) {
        ctx.response.body = {
            code: 500,
            message: error || '错误'
        }
    }
}

module.exports = {
    requeSay,requeAgree, sayIt, sayList, agreeSay
}