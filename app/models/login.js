const db = require('./db')

const login = async (user, pwd) => {
   const sql = `select * from users where name = ? and pass = ?`
   return await db.query(sql, [user, pwd])
}

const register = async (user, pwd) => {
   
   const _querySql = `select * from users where name = ?`
   const _query = await db.query(_querySql, [user])

   if (_query.length) {
      throw  Error('该账号已被注册')
   }

   const _insertSql = `insert into users values(null,?,?,default)`
   return await db.query(_insertSql, [user, pwd])

}


module.exports = {
   login, register
}