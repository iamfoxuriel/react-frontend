var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
// var UI_PATH = path.resolve(ROOT_PATH, 'ui/less/index.less');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const nodeEnv = process.env.NODE_ENV || 'development';
const isBuild = nodeEnv === 'build';

var config = {
  entry: {
    index: [
      APP_PATH,
      // UI_PATH
    ],
    vendor: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      'react': 'react/dist/react.min.js',
      'react-dom': 'react-dom/dist/react-dom.min.js',
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
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0',
      }],
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url-loader?limit=25000'
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
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],

};


module.exports = config;