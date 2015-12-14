'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'main': './public/js/main.js',
  },
  failOnError: true,
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: '[file].map',
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.jsx?$/,
        // See .babelrc for options.
        loaders: ['babel'],
      },
      {
        include: /node_modules\/react-stub/,
        test: /\.js$/,
        // See .babelrc for options.
        loaders: ['babel'],
      },
    ],
  },
  plugins: [
    // fetch polyfill: http://mts.io/2015/04/08/webpack-shims-polyfills/
    // relies on imports-loader and exports-loader in node_modules
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'Promise': 'imports?this=>global!exports?global.fetch!es6-promise',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'public/js/',
      'node_modules',
    ],
  },
  stats: {
    // Configure the console output
    colors: true,
    modules: true,
    reasons: true,
  },
  watch: true,
};
