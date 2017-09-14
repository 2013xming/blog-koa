import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

module.exports = {
	entry:"../src/admin/App.js",
	output:'../build/admin/App.js',
	module:{
		loaders:{
			{
				test : /\.jsx?$/,
				exclude: /(node_modules)/,
				loader:['babel-loader'],
				query:{
					presets:['react','es2015']
				}
			}
		}

	}
	resolve:{
		extensions:['js','json']
	}
}