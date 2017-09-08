var koa = require('koa');
var path = require("path");
var koaStaticCache = require('koa-static-cache');
var router = require(path.join(__dirname,'router'));
var render = require('koa-ejs');
var app = new koa();

render(app{
	root:path.join(__dirname,'views'),
	layout:'index',
	viewExt:'html',
	cache:true,
	debug:true
})
app.use(koaStaticCache(path.join(__dirname, 'public'),{prefix:'/public',gzip:true}));
app.use(router);
app.use(function* () {
	yield this.render('404',{layout:false});
});
app.listen(3000);