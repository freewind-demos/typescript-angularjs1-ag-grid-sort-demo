const path = require('path');

module.exports = {
  mode: "development",
  entry: './hello.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }, {
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  devServer: {
    publicPath: '/dist'
  }
}
