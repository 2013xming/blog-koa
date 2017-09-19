var path = require("path");
var Router = require('koa-router');
var router = new Router();


router.get('/',async (ctx,next)=>{  
	console.log(0);
	await ctx.render('index',{layout:false,staticPath:'/public'});
});
exports = module.exports= router;