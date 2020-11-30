const db = require('./db')

const says = async (user, says) => {
    const sql = `insert into list values(null,?,?,default)`
    return await db.query(sql, [user, says])
}

const search = async (user) => {
    const sql = `select * from list where user = ? `
    return db.query(sql, [user])
}

module.exports = {
    says, search
}