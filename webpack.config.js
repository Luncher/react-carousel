const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: "./src/index.tsx",
  devtool: devMode ? 'inline-source-map' : 'hidden-source-map',
  mode: devMode ? 'development' : 'production',
  output: {
    filename: devMode ? 'index.js' : 'index.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'react-ts-template',
    libraryTarget: 'umd'
  },
  externals: ['react', 'react-dom'],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'index.css'
  })],
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      }
    ]
  }
}
