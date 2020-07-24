const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  devtool: 'inline-source-map',
};

module.exports = merge(commonConfig, devConfig);
