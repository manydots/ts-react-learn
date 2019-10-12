let fs = require('fs-extra');
let globby = require('globby');
let path = require('path');

function build() {
	//STEP 3 将lib copy 到 build 目录
	globby([
		'node_modules/react/umd/react.profiling.min.js',
		'node_modules/react-dom/umd/react-dom.profiling.min.js',
	]).then(paths => {
		fs.mkdirsSync('build/lib/');
		paths.forEach((item) => {
			let filename = path.basename(item);
			fs.copySync(item, 'build/lib/' + filename);
		});
		//使用统计
		console.log('copy files to build/lib done !');
	});
}

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

module.exports = {
	build: build,
	findSync:findSync
};