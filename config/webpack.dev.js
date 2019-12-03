const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  devtool: 'eval-source-map',
  mode: 'development',
};