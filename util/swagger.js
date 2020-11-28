const Router = require('koa-router')
const router = new Router()
const path = require('path')
const swaggerJsDoc = require('swagger-jsdoc')

const swagger = {
    info:{
        title:'API',
        version:'1.0.0',
        description:'测试'
    },
    host:'localhost:3000',
    basePath:"/"
}


const options = {
    swaggerDefinition:swagger,
    apis:[path.join(__dirname,'./router/*.js')],
}


const swaggerSpec = swaggerJsDoc(options)

router.get('/swagger.json',async(ctx)=>{
    ctx.set('Content-Type','application/json');
    ctx.body = swaggerSpec
})


module.exports = router