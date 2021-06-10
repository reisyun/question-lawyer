const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
    alias: {
      '@': resolve('src'),
    },
    configure: {
      output: {
        filename: 'static/js/[name].js',
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false;
          },
        },
      },
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
