const sequelize = require('./db2')
const user = require('./user-database')
const list = require('./list-database')
const { Model, Sequelize} = require('sequelize')

class Relation extends Model{

}

Relation.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:'id'
    },
    userid:{
       type:Sequelize.INTEGER,
        // references:{
        //     model:user,
        //     key:'uuid'
        // }
    },
    sayid:{
       
        type:Sequelize.INTEGER,
        // references:{
        //     model:list,
        //     key:'id'
        // }
    }


},{
    sequelize,
    modelName:'relation1',
    tableName:'relation1'
})
// user.hasMany(list,{foreignKey:'userId'})
// list.hasMany(user,{foreignKey:'listId'})
list.belongsTo(user,{foreignKey:'userId'})
// user.belongsTo(list,{foreignKey:'listId'})
user.belongsToMany(list,{through:'relation1'})
list.belongsToMany(user,{through:'relation1'})
module.exports = Relation

