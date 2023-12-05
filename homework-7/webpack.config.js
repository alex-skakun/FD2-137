const { resolve } = require('node:path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (_env, args) => {
  const isProd = args.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    context: resolve(__dirname, './src'),
    entry: {
      main: './index'
    },
    output: {
      clean: true,
      path: resolve(__dirname, '../dist/homework-7'),
      filename: '[name].[contenthash].js'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.html',
        inject: 'head',
        scriptLoading: 'defer',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
    ],
  };
};
