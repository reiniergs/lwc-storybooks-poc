const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin');

module.exports = async ({ config, mode }) => {
  config.plugins.push(
    new LWCWebpackPlugin({
      namespace: {
        lightning: path.resolve('./src/lightning')
      },
      modules: ['@salesforce-ux/design-system']
    })
  );

  config.module.rules = [
    {
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      loader: 'file-loader/dist/cjs.js',
      query: { name: 'static/media/[name].[hash:8].[ext]' }
    }
  ];

  return config;
};
