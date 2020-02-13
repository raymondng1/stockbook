'use strict';

const { resolve } = require('path');

const Dotenv = require('dotenv-webpack');

module.exports = {
  node: {
    fs: 'empty'
  },
	entry: ['babel-polyfill', './app/main'],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	mode: 'development',
	context: __dirname,
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /jsx?$/,
				include: resolve(__dirname, './app'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
};
