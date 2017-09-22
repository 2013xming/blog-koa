import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

module.exports = {
	entry:path.join(__dirname,'../src/App.js'),
	output:{
		path: path.join(__dirname,'../public/'),
  		filename: '[name].bundle.min.js',
	},
	module:{
		loaders:[
			{
				test : /\.jsx?$/,
				exclude: /(node_modules)/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015']
				}
			}
		]

	},
	resolve:{
		extensions:['.js','.json']
	}
}