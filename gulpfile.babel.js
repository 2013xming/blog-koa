import gulp from "gulp";
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import unlify from 'gulp-uglify';
import del from 'del';

const glp = gulpLoadPlugins();
const NODE_ENV = process.env.NODE_ENV;

const isDev = NODE_ENV === 'development';

let paths = {
	src:{
		scss:'src/**/*.scss',
		js:'src/**/*.js',
		css:'src/**/*.css'
	},
	dist:{
		root:'./build/',
		dev:'./build/dev/',
		prod:'./build/prod/'
	}
}
//清空build 目录
gulp.task('clean',()=>{
	return del(['./build']);
});
gulp.task('js', ()=> {
  let webpackConfig = isDev
    ? require('./webpack/webpack.config.dev.babel.js')
    : require('./webpack/webpack.config.prod.babel.js');

  return webpack(webpackConfig)
    .pipe(gulp.dest(paths.dist.dev));
});