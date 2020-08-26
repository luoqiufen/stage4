// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let VuePlugin = require('vue-loader/lib/plugin');

const path = require('path');

// 获取当前运行的环境是不是开发环境
let isDev = process.env.NODE_ENV == 'development';
console.log(isDev);

module.exports = {
    resolve:{
        // 后缀名
        extensions:['.js','.css','.less'],
        // 别名
        alias:{
            '@css':'../css'
        }
    },
    
    entry: './src/main.js',

    output: {
        // __dirname表示当前项目的路径
        path: path.resolve(__dirname,'dist2'),
        filename:'[hash:5]-tt-[name].js'
    },

    module: {
        rules:[
            {
                // isDev?'vue-style-loader':MiPin.loader,
                test:/\.(c|le)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    // 'vue-style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true//css模块化
                        }
                    },
                    'less-loader'
                ]
            },
            // 处理图片
            {
                test:/.(jpg|png|gif|jpeg)$/,
                use:{
                    // loader:'file-loader',
                    // 将图片转换成base64格式
                    loader:'url-loader',
                    options:{
                        // 重命名,不是呀默认的md5hash值,指定名称
                        name:'[name]-[hash:6].[ext]',
                        // 输出路径
                        outputPath:'images/',
                        // 限制图片大小
                        limit:20*1024
                    }
                }
            },
            // babel处理ES6
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/,
            },
            // 处理vue文件
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },

    // 插件
    plugins:[
        new HtmlPlugin({
            template:'./src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash:6].css"
        }),
        new VuePlugin()
    ],

}