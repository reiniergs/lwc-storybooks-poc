const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = async ({ config, mode }) => {
    config.plugins.push(
        new LWCWebpackPlugin({
            namespace: {
                // LWC Namespace with path
                lightning: path.resolve('./src/lightning'),
                wrappers: path.resolve('./stories/wrappers')
            }
        })
    );
    config.module.rules = [{
        test: /\.stories\.js$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    }];
    
    return config;
};
