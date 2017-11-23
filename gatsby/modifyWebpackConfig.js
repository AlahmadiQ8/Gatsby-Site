// Based on
// https://github.com/reactjs/reactjs.org/blob/master/gatsby/modifyWebpackConfig.js

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = ({ config, stage }) => {
  config.merge({
    resolve: {
      root: resolve(__dirname, '../src'),
    },
  });
  return config;
};
