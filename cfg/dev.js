'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

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
            'classnames'
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
      new BowerWebpackPlugin({
          searchResolveModulesDirectories: false
      }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
      }),
      new webpack.ProvidePlugin({
          'Promise': 'es6-promise',
          'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
          '_': 'lodash'
      })
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
