const Sequelize = require('sequelize')
const dbConfig = require('../../config/database')

const sequelize = new Sequelize(dbConfig.database,
    dbConfig.user, dbConfig.pwd, {
    dialect: 'mysql',
    host: dbConfig.url,
    port: dbConfig.port,
    timezone: '+08:00',
    define: {
        createdAt: 'create_time',
        updatedAt: 'update_time',
    }

}
)

sequelize.sync()

module.exports = sequelize

