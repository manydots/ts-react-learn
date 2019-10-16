var config = require('./webpack.base.config');
var path = require('path');
var fs = require('fs-extra');
var buildPath = path.resolve(__dirname, 'build/lib');
var Tools = require('./src/utils/index');

module.exports = (env, argv) => {
    //console.log(config.output.path)
    if (argv.mode === 'production') {
        var CleanWebpackPlugin = require('clean-webpack-plugin');
        var vendor = ['react', 'react-dom', 'react-router-dom'];
        config.entry['lib/vendor'] = vendor;
        //config.optimization.splitChunks.chunks = 'all';
        config.plugins.push(new CleanWebpackPlugin());
        if (!fs.existsSync(buildPath) || Tools.findSync(buildPath).length <= 2) {
            setTimeout(function() {
                Tools.build();
            }, 1000)
        };
    } else if (argv.mode === 'development') {
        //开发模式不打包
        config.externals = {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM"
        };
        if (!fs.existsSync(buildPath) || Tools.findSync(buildPath).length <= 2) {
            Tools.build();
        };
    };
    return config;
};