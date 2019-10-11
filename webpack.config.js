var config = require('./webpack.base.config');
var fs = require('fs-extra');

module.exports = (env, argv) => {
    //console.log(argv.mode)
    if (argv.mode === 'production') {
        //var CleanWebpackPlugin = require('clean-webpack-plugin');
        //config.plugins.push(new CleanWebpackPlugin())
    } else if (argv.mode === 'development') {
        var path = require('path');
        var buildPath = path.resolve(__dirname, 'build/lib');
        if (!fs.existsSync(buildPath)) {
            require('./src/utils/index').build();
        }
    };
    return config;
}