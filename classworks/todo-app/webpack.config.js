const { resolve } = require('node:path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, flags) => {
  const isProd = flags.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    context: resolve(__dirname, './src'),
    devtool: 'source-map',
    entry: {
      main: './index',
    },
    output: {
      path: resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      clean: true,
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
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.html',
        inject: 'head',
      }),
    ],
    devServer: {
      port: 8181,
    },
  };
};
