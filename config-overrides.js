const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@mappers']: path.resolve(__dirname, './src/mappers'),
    ['@models']: path.resolve(__dirname, './src/models'),
    ['@pages']: path.resolve(__dirname, './src/pages'),
  }),
);
