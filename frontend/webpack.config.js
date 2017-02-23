var path = require('path');
var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin')

devServer = {
  outputPath: __dirname + "/../backend/public/",
  hot: true
},

module.exports = {
  entry: './app/index.js',
  output: {
    publicPath: "/assets/",
    path: __dirname + "/../backend/public/",
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: [ 'es2015', 'react' ] }
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
