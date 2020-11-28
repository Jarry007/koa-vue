const { query } = require('./db')
const db = require('./db')

const login = async (user, pwd) => {
   const sql = `select * from users where name = ? and pass = ?`
   return await db.query(sql, [user, pwd])
}

const register = async (user, pwd) => {
   const _querySql = `select * from users where name = ?`
   const _query = await db.query(_querySql, [user])

   if (_query.length) {
      throw new Error('已存在')
   }

   const _insertSql = `insert into users values(null,?,?)`
   return await db.query(_insertSql, [user, pwd])

}
module.exports = {
   login, register
}