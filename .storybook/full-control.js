const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const webpackConfig    = require('./../webpack.config');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Adding rules
  webpackConfig.module.rules.forEach(x => {
    config.module.rules.push(x);
  });

  // Adding plugins
  webpackConfig.plugins.forEach(x => {
    config.plugins.push(x);
  });

  config.resolve.modules.push('./../src', './../node_modules');

  return config;
};
