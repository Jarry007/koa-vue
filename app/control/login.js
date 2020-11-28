const db = require('../models/db')

const index = async (ctx)=>{
    ctx.response.body = '首页'
}

const loginIt = async (ctx,next)=>{
    // const res = await db.query()
    console.log('get',ctx.request.body)
    ctx.response.body = ctx.request.body
    next()

}

const registerIt = async(ctx)=>{
    // const info = 
    const res = await db.query()

    console.log('查询结果',res)
    
    ctx.response.body = res
}

const loginPage  = async(ctx,next)=>{
    console.log('loginPage',ctx)

}

module.exports = {
    loginIt,loginPage,index,registerIt
}