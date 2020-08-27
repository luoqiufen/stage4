// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let VuePlugin = require('vue-loader/lib/plugin');

const path = require('path');

module.exports = {
    resolve:{
        extensions:['.js','.css','.vue'],
        alias:{
            '@slide':path.resolve(__dirname,"src/assets/slideShow")
        }
    },
    
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist2'),
        filename:'[hash:5]-tt-[name].js'
    },

    module: {
        rules:[
            {
                test:/\.(c|le)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test:/.(jpg|png|gif|jpeg)$/, 
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name]-[hash:6].[ext]',
                        outputPath:'images/',
                        limit:20*1024,
                        esModule:false
                    }
                }
            },
            {
                test:/\.(ttf|woff)$/,
                use:'file-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/,
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },

    plugins:[
        new HtmlPlugin({
            template:'./public/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash:6].css"
        }),
        new VuePlugin()
    ],

}