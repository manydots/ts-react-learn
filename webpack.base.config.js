var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var vendor = ['react', 'react-dom'];
module.exports = {
	entry: {
		index: './src/app.tsx'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
	//devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			components: path.join(__dirname, 'src/components'),
			utils: path.join(__dirname, 'src/utils'),
			pages: path.join(__dirname, 'src/pages'),
			images: path.join(__dirname, 'src/images'),
		}
	},
	devServer: {
		contentBase: "./",
		host: 'localhost',
		port: 8082,
		historyApiFallback: true
	},
	module: {
		rules: [{
			test: /\.(tsx|ts|js)?$/,
			exclude: /node_modules/,
			loader: "awesome-typescript-loader"
		}, {
			test: /\.(css|less)$/,
			exclude: /node_modules/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, 'css-loader', 'less-loader']
		}, {
			test: /\.(png|jpg|gif|ico)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'images/[hash:16].[name].[ext]'
				}
			}]
		}]
	},
	//webpack不打包资源配置
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router-dom": "ReactRouterDOM"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].bundle.css'
		})
	],
	optimization: {
		splitChunks: {
			//chunks: "all",开发模式异常
			cacheGroups: {
				commons: {
					chunks: "all",
					name: "commons",
					chunks: "initial",
					minChunks: 2
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					warnings: false,
					compress: {
						unused: true,
						dead_code: true,
						drop_debugger: true,
						drop_console: true,
						pure_funcs: ['console.log'] // 移除console
					},
					mangle: true,
					output: {
						comments: false,
						ascii_only: true
					}
				}
			})
		],
	}
};