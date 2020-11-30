在根目录下创建 `config` 文件夹。
- 在其下添加 `database.js`

```javascript
const data = {
    url:'database-host',  //host
    user:'database-user',  //user
    pwd:'database-pwd',   //password
    database:'database-database' //database

}

module.exports =  data
```
- 在其下添加 `token-secret.js` 用来当作 `token` 的公钥。

  ` module.exports = 'node-koa' `






