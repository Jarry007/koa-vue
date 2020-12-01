// const { user } = require('../../config/database')
const db = require('./db')

const says = async (user, says) => {
    const sql = `insert into list values(null,?,?,default)`
    return await db.query(sql, [user, says])
}

const search = async (user) => {
    const sql = `select * from list where user = ? `
    return db.query(sql, [user])
}

// 查询是赞同过该言论
const agreeSearch = async (userid, agreeid) => {
    const search = `select * from relation where userid = ? and agreeid = ?`
    return await db.query(search, [userid, agreeid])
}
// 取消赞同
const abolishAgree = async (userid, agreeid) => {
    const delet = `delete from relation where userid = ? and agreeid = ?`
    return await db.query(delet, [userid, agreeid])
}

//赞同该言论
const insertAgree = async (userid, agreeid) => {
    // const search = `select * from relation where userid = ? and agreeid = ?`
    // const searchRes = await db.query(search,[userid,agreeid])
    // if(searchRes.length){
    //     const delet = `delete from relation where userid = ? and agreeid = ?`
    //     return await db.query(delet,[userid,agreeid])
    // }else{
    const sql = `insert into relation values(null,?,?,default)`
    return await db.query(sql, [userid, agreeid])
    // }

}
module.exports = {
    says, search, insertAgree,abolishAgree,agreeSearch
}