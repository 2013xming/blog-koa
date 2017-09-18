var koa = require('koa');
var path = require("path");
var koaStaticCache = require('koa-static-cache');
const router = require(path.join(__dirname,'router'));

var render = require('koa-ejs');
var app = new koa();


render(app,{
	root:path.join(__dirname,'../views'),
	layout:'index',
	viewExt:'html',
	cache:false,
	debug:true
});

/*router.get('/dad',async (ctx,next)=>{  
	console.log(0);
	await ctx.render('index',{layout:false,staticPath:'./build'});
}); */ 
app.use(koaStaticCache(path.join(__dirname, 'public'),{prefix:'/public',gzip:true}));
app.use(router.routes());
app.use(function* () {
	console.log(1);
	yield this.render('404',{layout:false});
});

module.exports = app;
