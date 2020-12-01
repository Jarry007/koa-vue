const say = require('../models/say')

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


const agreeSay = async (ctx) => {
    const { userid } = ctx.userInfo
    let { sayid } = ctx.request.body
    parseInt(sayid)
    console.log(ctx.userInfo,sayid)
    try {
        const hasAgreen = await say.agreeSearch(userid,sayid)
        console.log('has',hasAgreen)
        if(hasAgreen.length){
            await say.abolishAgree(userid,sayid)
            ctx.response.body = {
                code: 200,
                message: '取消成功'
            }
        }else{
            await say.insertAgree(userid,sayid)
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
    sayIt, sayList,agreeSay
}