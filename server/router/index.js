var path = require("path");

var router = {};
router.index  = function*(next){
	yield this.render('index',{layout:false,staticPath:"./build"})
}
module.exports= router;