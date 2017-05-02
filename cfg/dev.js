'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
    entry   : {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
            'webpack/hot/only-dev-server',
            './src/index'
        ],
        vendors: [
            'react',
            'redux',
            'react-dom',
            'react-redux',
            'react-router',
            'lodash',
            'classnames',
            'babel-polyfill',
            'whatwg-fetch',
        ]
    },
    output: {
        path         : path.join(__dirname, 'dist'),
        publicPath   : '/assets/',
        filename     : '[name].js',
        chunkFilename: '[id].chunk.js',
        pathinfo     : true
    },
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
          name     : 'vendors',
          filename : 'vendors.js',
          minChunks: Infinity
      }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
      }),
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
