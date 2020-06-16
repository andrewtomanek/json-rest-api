const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve("src/index.tsx"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /\.test.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "./index.html",
      favicon: path.join(__dirname, "public", "favicon.ico"),
    }),
    new CleanWebpackPlugin(),
  ],
};
