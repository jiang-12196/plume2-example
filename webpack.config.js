const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: [ 'node_modules', path.resolve(__dirname, 'web_modules') ],
		extensions: [ '.web.js', '.js', '.css', '.json', '.ts', '.tsx' ],
		alias: {
			react: 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				include: [ path.resolve(__dirname, 'src') ],
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.tsx?$/,
				include: [ path.resolve(__dirname, 'src') ],
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			dev: true,
			filename: 'index.html',
			template: './index.ejs'
		})
	],
	devServer: {
		port: 3000,
		host: '0.0.0.0',
		disableHostCheck: true
	}
};
