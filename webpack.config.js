const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    `${path.resolve(__dirname, 'src')}/index.jsx`,
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: [
          { loader: 'babel-loader' },
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 8080
  },
};
