const path = require('path');
const customConfig = require('../craco.config.js');

const resolve = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async config => {
    const { webpack } = customConfig;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, ...webpack.extensions],
        alias: {
          ...config.resolve.alias,
          ...webpack.alias,
        },
      },
    };
  },
};
