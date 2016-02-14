var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/scss/style.scss',
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.jade$/, loader: 'jade' },
      { test: /\.(scss|css)$/, loader: 'style!css!sass' },
      { test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=500000' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.jade'
    })
  ]
}
