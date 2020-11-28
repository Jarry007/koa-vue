const mysql = require('mysql')
const dbConfig = require('../../config/database')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.url,
    user: dbConfig.user,
    password: dbConfig.pwd,
    database: dbConfig.database

})

const db = {}

db.query = (sql,values)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                reject(err)
                return
            }

            connection.query(sql,values,(error,result,fields)=>{
                if(error){
                    reject(error)
                    return
                }
                // console.log('ress',result)
                resolve(result)
                connection.release()
            })
        })
    })
}

// console.log('pppp',pool)
// pool.query('SELECT * FROM demo', (err, res, fields) => {
//     return new Promise((resolve, reject) => {
//         console.log(res)
//         if (err) {
//             reject(err)
//             return
//         }

//         resolve(res)
//     })

// })


module.exports =  db