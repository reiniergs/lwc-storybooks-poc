const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = async ({ config, mode }) => {
    config.plugins.push(
        new LWCWebpackPlugin({
            namespace: {
                // LWC Namespace with path
                lightning: path.resolve('./src/lightning')
            }
        })
    )
    config.module.rules = [];
    return config;
};
