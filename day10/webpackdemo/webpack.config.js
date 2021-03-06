// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let VuePlugin = require('vue-loader/lib/plugin');


const path = require('path');

module.exports = {
    mode:"development",//环境
    devtool:"cheap-module-eval-source-map",
    resolve:{
        // 后缀名
        extensions:['.js','.css','.less'],
        // 别名
        alias:{
            '@css':'../css'
        }
    },
    // 入口文件
    // 从哪个文件开始查找相关的依赖
    // entry: "./src/index.js",//单一入口

    // 多入口文件
    /* entry:[
        './src/index.js',
        './src/index2.js'
    ], */
    /* entry:{
        aaa:'./src/js/index.js',
        bbb:'./src/js/index2.js'

    }, */

    entry: './src/main.js',

    // 出口,输出路径
    // 指定打包生成文件的保存位置
    output: {
        // __dirname表示当前项目的路径
        path: path.resolve(__dirname,'dist2'),
        filename:'[hash:5]-tt-[name].js'
    },

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module: {
        rules:[
            {
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
        /* new HtmlPlugin({
            // 指定生成文件的名称
            filename:'a.html',
            // 指定使用的模板
            template:'./src/testWeb.html',
            // 指定使用那些chunks(entry中的key)
            chunks:['aaa'],
            
        }),
        new HtmlPlugin({
            filename:'b.html',
            template:'./src/testWeb.html',
            chunks:['bbb'],
            minify:{
                removeComments:true, //删除注释
                collapseWhitespace:true, //删除空白和换行
                minifyCSS:true, //删除css中的空白和换行
            }
        }), */
        new HtmlPlugin({
            template:'./src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename:'index-[contenthash:5]-[name].css'
            filename: "[name]-[contenthash:6].css"
        }),
        new VuePlugin()
    ],

    // 配置webpack-dev-server
    devServer:{
        contentBase:__dirname+'/dist',
        host:'localhost',
        port:4001,
        open:false, //自动打开浏览器
        overlay:{
            errors:true //出错时显示错误
        },
        hot:true, //开启热加载
        proxy:{} //请求代理
    }
}