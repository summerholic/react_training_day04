
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonProperties = require('./common.properties.js');


const config = {
  //
  resolve: {
    modules: [path.resolve(__dirname, commonProperties.app.dir), 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@mes/mes-shared': path.resolve(`${commonProperties.app.dir}/mesShared/index`),
      'mes-ui-react': path.resolve(`${commonProperties.app.dir}/component/index`),
    },
  },

  module: {
    rules: [
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        use: "file-loader?publicPath=./&name=font/[name].[ext]",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=10000&publicPath=./&name=img/[name].[ext]',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-export-default-from",
              "react-hot-loader/babel",
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ],
          }
        }],
      },
      {
        test: /\.js/,
        use: 'imports-loader',
      },
      {
        test: /jquery\.flot\.resize\.js$/,
        use: 'imports-loader?this=>window',
      },
    ]
  },

  resolveLoader: {
    alias: {
      'rtlcss-loader': path.join(__dirname, 'rtlcss-loader.js'),
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      WP_BASE_HREF: '/',
    }),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
};

module.exports = config;
