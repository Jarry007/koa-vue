const relationBase = require('../models/useragree')
const listBase = require('../models/list-database')
const userBase = require('../models/user-database')
// const { json } = require('sequelize/types')
const requeSay = async (ctx) => {
    const { userid } = ctx.userInfo
    console.log(ctx.userInfo)
    const { says } = ctx.request.body
    // console.log(uuid, says)
    try {
        const say =  await listBase.create({
            says:says,
            userId: userid
        })
        ctx.body = {
            code: 200,
            message: '成功'
        }
    } catch (error) {
        ctx.body = {
            code: 500,
            message: error.message || '错误'
        }
    }
}

const reSayList = async (ctx) => {
    console.log(ctx)
    // const { uuid } = ctx.userInfo
    try {
        const list = await listBase.findAll({
            include:
            {
                model: userBase,
                attributes: ['id', 'name']
            }

        })
        const listCover = async (list) => {
            for (let i = 0; i < list.length; i++) {
                const getAgreeCount = await relationBase.count({
                    where: { sayid: list[i].id }
                })
                list[i].setDataValue('count', getAgreeCount)
            }
            return list
          
        }
       
        
        const result = list.length? await listCover(list):[]

        ctx.body = {
            code: 200,
            message: '成功',
            data: result
        }

    } catch (error) {
        console.log('err', error.message)
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
        const agree = await relationBase.findOne({
            where: {
                userid: uuid,
                sayid: sayid
            }
        })

        if (agree) {
            await agree.destroy()
            ctx.response.body = {
                code: 200,
                message: '取消成功'
            }
        } else {
            await relationBase.create({
                userid: uuid,
                sayid: sayid
            })

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


module.exports = {
    reSayList, requeSay, requeAgree, 
}