const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "keyframes-marquee.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "examples"),
    open: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: true
    },
    port: 9000
  }
};
