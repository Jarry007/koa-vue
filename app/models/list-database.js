const sequelize = require('./db2')
const {Sequelize, Model} = require('sequelize')

class List1 extends Model{

}

List1.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:'用户id'
    },
    userid:{
        type:Sequelize.UUID,
        comment:'用户uuid',
    },
    says:{
        type:Sequelize.STRING(140),
        comment:'言论'
    }
},{
    sequelize,
    modelName:'list1',
    tableName:'list1'
})




module.exports = List1