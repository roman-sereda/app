var path = require('path');
var webpack = require('webpack');

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
  resolve:{
    extensions: ['', '.jsx', '.js']
  }
};
