var path = require('path');
module.exports = {
	entry: {
		index: './src/app.tsx'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			components: path.join(__dirname, 'src/components'),
			utils: path.join(__dirname, 'src/utils'),
			pages: path.join(__dirname, 'src/pages')
		}
	},
	devServer: {
		contentBase: "./",
		host: 'localhost',
		port: 8082
	},
	module: {
		rules: [{
			test: /\.(tsx|ts|js)?$/,
			exclude: /node_modules/,
			loader: "awesome-typescript-loader"
		}]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};