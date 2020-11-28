const koa = require('koa')
const koaSwagger = require('koa2-swagger-ui') 
const app = new koa()
const cors = require('koa2-cors')
const swagger = require('./util/swagger')
const bodyParse = require('koa-bodyparser')


app.use(cors({
    maxAge:10,
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
// app.use(cors())
app.use(swagger.routes(),swagger.allowedMethods())
app.use(koaSwagger.koaSwagger({
    routePrefix:'/swagger',
    swaggerOptions:{
        url:'/swagger.json'
    }
}))


const login_route = require('./app/router/login')
app.use(bodyParse())

app.use(login_route.routes()).use(login_route.allowedMethods())



app.listen(3000)

console.log('开始监听。。。')