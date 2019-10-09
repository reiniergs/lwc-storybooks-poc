const prodConfig = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
  config.plugins = [...config.plugins, ...prodConfig.plugins];

  config.resolve = prodConfig.resolve;

  config.module.rules = [
    ...prodConfig.module.rules,
    {
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      loader: 'file-loader/dist/cjs.js',
      query: { name: 'static/media/[name].[hash:8].[ext]' }
    }
  ];

  return config;
};
