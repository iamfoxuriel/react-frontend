var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const nodeEnv = process.env.NODE_ENV || 'development';
const isBuild = nodeEnv === 'build';


var config = {
    entry: {
        index: [
            // 'webpack/hot/dev-server',
            APP_PATH
        ],
        vendor: ["react","react-dom"]
    },
    resolve: {
        alias: {
            'react': 'react/dist/react.min.js',
            'react-dom': 'react-dom/dist/react-dom.min.js'
        }
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },

    module: {
        // noParse: /react|react-dom/,
        rules: [{
            test: /\.js|jsx$/,
            use: [ {
                loader: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'
            }],
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.js'
        }),
        new HtmlwebpackPlugin({
            title: 'Small Business Back Office'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

};





module.exports = config;