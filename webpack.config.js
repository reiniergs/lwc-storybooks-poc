const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new LWCWebpackPlugin({
      namespace: {
        lightning: path.resolve('./src/lightning')
      },
      modules: ['@salesforce-ux/design-system']
    })
  ]
};
