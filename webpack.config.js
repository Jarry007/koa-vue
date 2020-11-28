const path = require('path')

const dotEnv = require('dotenv-webpack')
const env = process.env.NODE_ENV
module.exports = {
    entry:'./app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'demo.js',
        // publicPath:path.resolve(__dirname)
    },
    plugins:[
        new dotEnv({
            path:`./.env.${env==='development'?'development':'production'}`
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}