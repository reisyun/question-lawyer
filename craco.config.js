const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  babel: {
    plugins: [['@emotion', { labelFormat: '[filename]--[local]' }]],
  },
  webpack: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    },
  },
};
