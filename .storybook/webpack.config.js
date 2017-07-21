const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const css = new ExtractTextPlugin('styles.css');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: css.extract({
          use: 'css-loader?localIdentName=[path]_[name]_[hash:base64:5]!postcss-loader'
        })
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    css
  ]
}
