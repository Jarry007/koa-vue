const db = require('./app/models/db')
const sql = require('./util/sql')

if (!Object.keys(sql).length) {
    console.log('空指令')
    return
}



const creatTable = async (sql) => {
    for (let i in sql) {
        try {
            await db.query(sql[i], [])
            console.info(`操作-${i} 完成`)
        } catch (error) {
            throw Error(error.message)
        }

    }
    console.log('=========')
    console.log('完成')
    return
}

creatTable(sql)


return
