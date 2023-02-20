const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        fs: false,
    };

    config.resolve.alias = {
        '~': path.resolve(__dirname, './src'),
    };

    return config;
};
