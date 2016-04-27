// Register new plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.png$/, loader: "file-loader" },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}