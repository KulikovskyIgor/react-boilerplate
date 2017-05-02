'use strict';

let path = require('path');
let webpack = require('webpack');
let OfflinePlugin = require('offline-plugin');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

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
            'classnames',
            'babel-polyfill',
            'whatwg-fetch',
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
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin(),
      new OfflinePlugin(),
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
