const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack")
const path = require("path")

module.exports = {
  devtool: "source-map",
  devServer: {
    port:8081,
    hot: true,
    overlay: true,
    // clientLogLevel: "error",
    publicPath: "/",
    contentBase: path.resolve(__dirname, "../dist"),
    proxy: {
      "/api": {
        target: "http://47.96.116.169:80",
        changeOrigin: true
      }
    },
  historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}