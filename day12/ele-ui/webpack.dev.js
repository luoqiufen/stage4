// 开发环境
let {merge} = require('webpack-merge')
let base = require('./webpack.base')

module.exports = merge(base,{
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:__dirname+'/dist',
        host:'localhost',
        port:4001,
        open:false, 
        overlay:{
            errors:true 
        },
        hot:true,
        proxy:{
        }
    }
})