const sequelize = require('./db2')
const { Sequelize, Model } = require('sequelize')


class List1 extends Model {
    // static async getList() {
    //     const one = await this.findOne()
    //     // one.users = await relationBase.findAll(
    //     //     {

    //     //     }
    //     // )
    //     const data = {
    //         id:one.id,
    //         userid:one.userid,
    //         says:one.says,
    //         create_time:one.create_time,
    //         update_time:one.update_time,
            
    //     }
    //     // console.log('listBase1', relationBase)
    //     data.users = await relationBase.findAll()
    //     return data
    // }

}

List1.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '用户id'
    },
    // userid: {
    //     type: Sequelize.UUID,
    //     comment: '用户uuid',
    // },
    says: {
        type: Sequelize.STRING(140),
        comment: '言论'
    }
}, {
    sequelize,
    modelName: 'list1',
    tableName: 'list1'
})




module.exports = List1