const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bandle.[chunkhash].js", //чтобы не кешировалось название на хостинге, добавим хеш(смотри папку pablic), который будет показывать разность сборок
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      // позволяет генерировать  html уже с подключенным к нему script
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin() //для очистки папки plugin
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"] // для чтения css
      }
    ]
  }
};
