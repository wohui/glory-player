var path = require('path')
const webpack = require("webpack")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//配置文件是放在config的目录下的，所有这里定义了一个项目的根目录变量
var projectRootPath = path.resolve(__dirname, '..')

var config = {
    entry: {
        'vendor': ['react','react-router-dom','element-react', 'element-theme-default'],
        'index': './client/app.js'
    },
    //生成文件路径
    // output: {
    //     path: path.resolve(projectRootPath, 'static', 'build'),
    //     filename: 'bundle.js',
    //     publicPath: '/static/build'
    // },
    output:
        {
            path: path.resolve(__dirname, '../static/build'),
            filename: '[name].js'
        },
    plugins: [
        /*设置热更新*/
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.SplitChunksPlugin({
            chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async"
            minSize: 0, // 最小尺寸，默认0
            minChunks: 1, // 最小 chunk ，默认1
            maxAsyncRequests: 1, // 最大异步请求数， 默认1
            maxInitialRequests: 1, // 最大初始化请求书，默认1
            name: function () {
            }, // 名称，此选项可接收 function
            cacheGroups: { // 这里开始设置缓存的 chunks
                priority: 0, // 缓存组优先级
                vendor: { // key 为entry中定义的 入口名称
                    chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    name: "vendor", // 要缓存的 分隔出来的 chunk 名称
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1, // 最大异步请求数， 默认1
                    maxInitialRequests: 1, // 最大初始化请求书，默认1
                    reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }),

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react'],
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
                loader: 'file-loader?name=[hash:12].[ext]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=[name].[ext]'
            }

        ]
    },


};
module.exports = config;
