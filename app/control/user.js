const userBase = require('../models/user-database')
const listBase = require('../models/list-database')

const userInfo = async (ctx)=>{
    const {userid} = ctx.userInfo

    try {
        const list = await userBase.findOne({
            where:{
                id:userid
            },
            include:{ model:listBase,attributes:['id','says']}
        })

        ctx.body= {
            code:200,
            msg:'cheng',
            data:list
        }
    } catch (error) {
        
    }
}

module.exports = {
    userInfo
}
