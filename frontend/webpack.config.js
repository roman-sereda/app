var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    publicPath: "/assets/",
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
