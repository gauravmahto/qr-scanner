const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: ['./src/js/scan.js'],
  output: {
    filename: 'main.js',
    path: resolve(__dirname + '/dist')
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
