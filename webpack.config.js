var config = require('./webpack.base.config');
var path = require('path');
var fs = require('fs-extra');

module.exports = (env, argv) => {
    //console.log(config.output.path)
    if (argv.mode === 'production') {
        //var CleanWebpackPlugin = require('clean-webpack-plugin');
        //config.plugins.push(new CleanWebpackPlugin())
    } else if (argv.mode === 'development') {
        var buildPath = path.resolve(__dirname, 'build/lib');
        if (!fs.existsSync(buildPath) || findSync(buildPath).length <= 0) {
            require('./src/utils/index').build();
        }
    };
    return config;
};

function findSync(startPath) {
    let result = [];
    function finder(paths) {
        let files = fs.readdirSync(paths);
        files.forEach((val, index) => {
            let fPath = path.join(paths, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) {
                finder(fPath)
            };
            if (stats.isFile()) {
                result.push(fPath)
            };
        });

    };
    finder(startPath);
    return result;
}