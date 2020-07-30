const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin')
const port = 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: port
  },
  plugins: [
    new BrowserSyncWebpackPlugin(
      {
        proxy: `http://localhost:${port}/`,
        host: 'localhost',
        port: 3000,
        notify: false,
        open: false
      },
      {
        reload: false
      }
    )
  ]
});
