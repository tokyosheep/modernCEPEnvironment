const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../jsx/parts'),
    filename: 'funcs.js'
  },
  module: {
    rules: [
      {
        test: /.ts/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { loose: true, modules: 'commonjs' }], '@babel/preset-typescript'],
          plugins: ['@babel/plugin-transform-object-assign'] // needed for fast-xml-parser
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: false // minification may produce syntax errors because ExtendScript does not support nested ternary operators without parentheses
  },
  target: 'browserslist'
  // devtool: "inline-source-map",
};
