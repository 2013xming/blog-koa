var koa = require('koa');
var path = require("path");
var koaStaticCache = require('koa-static-cache');
const router = require(path.join(__dirname,'router'));
const convert = require('koa-convert');
var render = require('koa-ejs');
var app = new koa();


render(app,{
	root:path.join(__dirname,'../views'),
	layout:'index',
	viewExt:'html',
	cache:false,
	debug:true
});

app.use(koaStaticCache(path.join(__dirname, '..', 'public'),{
  maxAge: 60,prefix:'/public'
}));
app.use(router.routes());
app.use(function* () {
	console.log(1);
	yield this.render('404',{layout:false});
});

module.exports = app;
