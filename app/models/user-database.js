const sequelize = require('./db2')
const {Sequelize, Model} = require('sequelize')
const md5 = require('../../util/md5')

class User1 extends Model{
    
}

User1.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:'用户id'
    },
    // uuid:{
    //     type:Sequelize.UUID,
    //     defaultValue:Sequelize.UUIDV4,
    //     unique:"user1"

    // },
    name:{
        type:Sequelize.STRING(20),
        allowNull:false,
        unique:true,
        comment:'用户名'
    },
    pass:{
        type:Sequelize.STRING(32),
        allowNull:false,
        set(val){
            this.setDataValue('pass',md5(val))
        },
        comment:'用户密码'
    }
},{
    sequelize,
    modelName:'user1',
    tableName:'user1'
})




module.exports = User1