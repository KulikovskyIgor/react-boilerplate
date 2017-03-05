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
            './src/index'
        ],
        vendors: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'lodash',
            'classnames'
        ]
    },
  cache: false,
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name     : 'vendors',
          filename : 'vendors.js',
          minChunks: Infinity
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
      }),
      new BowerWebpackPlugin({
          searchResolveModulesDirectories: false
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin(),
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
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
