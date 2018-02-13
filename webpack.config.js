const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    `${path.resolve(__dirname, 'src')}/index.jsx`,
  ],
  module: {
    loaders: [
      {
        loaders: 'style!css',
        test: /\.css$/,
      },
      {
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        test: /\.jsx$/,
      },
    ],
  },
  devTool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugin: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
  resolve: ['', '.webpack.js', 'js', 'jsx'],
};
