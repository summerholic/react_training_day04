
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJson = require('../package.json');

const devServerProperties = require('./devServer.properties.js');
const commonProperties = require('./common.properties.js');
const common = require('./webpack.common.js');


const config = {

  mode: 'development',

  devtool: '#cheap-module-eval-source-map',

  entry: commonProperties.entry,

  output: {
    path: path.join(process.cwd(), './dist'),
    filename: '[name].[hash].js',
    libraryTarget: 'window',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        VERSION: JSON.stringify(packageJson.version),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: `${commonProperties.app.dir}/index.html`,
      baseUrl: '/',
      xhtml: true,
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: devServerProperties.proxy,
  }
};

console.log(config.devServer);


module.exports = webpackMerge(common, config);
