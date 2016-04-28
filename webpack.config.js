// Register new plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html'
});
var ExtractTextPluginConfig = new ExtractTextPlugin("style.css", {allChunks: true})

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPluginConfig.extract("style-loader", "css-loader!stylus-loader")
      },
      { test: /\.png$/, loader: "file-loader" },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
}