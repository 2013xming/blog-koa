import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

module.exports = {

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