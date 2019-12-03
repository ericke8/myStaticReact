const webpackMerge = require('webpack-merge');

const common = require('./webpack.common');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs);
  if (!addons) {
    addonsArgs = [addonsArgs];
  }
  return addonsArgs.filter(Boolean).map(name => require(`../build-utils/addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(common, envConfig, ... getAddons(addon));
};