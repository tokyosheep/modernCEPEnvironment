'use strict';
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false
    })
  ]
});
