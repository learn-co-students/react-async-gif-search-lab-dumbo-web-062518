var path = require('path');
var webpack = require('webpack');
var bootstrap = require('bootstrap-loader');

module.exports = {
  entry: ['./src/index.js', 'bootstrap-loader', './app']
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        loader: 'boostrap-loader'
      }
    ]
  },
};
