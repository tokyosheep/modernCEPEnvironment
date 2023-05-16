'use strict';
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { common, plugins } = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      DEBUG: false
    })
  ]
});
