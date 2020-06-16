const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 5000,
    publicPath: "/",
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
  },
});
