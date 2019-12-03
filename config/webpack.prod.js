const Dotenv = require('dotenv-webpack')

module.exports = {
  plugins: [
    new Dotenv({
      path: './.env.production'
    })
  ],
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  mode: 'production',
}