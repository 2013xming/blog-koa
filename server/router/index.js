var path = require("path");
var Router = require('koa-router');
var router = new Router();


router.get('/',function*(next){
	yield this.render('404',{layout:false});
});
exports = module.exports= router.routes();