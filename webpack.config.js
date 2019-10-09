const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /^((?!src\/modules).)*\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new LWCWebpackPlugin({
      namespace: {
        lightning: path.resolve('./src/modules/lightning')
      },
      modules: ['@salesforce-ux/design-system']
    })
  ],
  resolve: {
    modules: ['node_modules', path.resolve('./src')]
  }
};
