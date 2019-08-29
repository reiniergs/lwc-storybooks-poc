const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin')


module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',
    plugins: [
        new LWCWebpackPlugin({
            namespace: {
                // LWC Namespace with path
                lightning: path.resolve('./src/lightning')
            }
        }),
    ]
};
