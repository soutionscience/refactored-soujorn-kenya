var Package = require('../models/package.model')

exports.get = function(req, res, next){

	console.log("hitting package")
	Package.find({})
	.exec(function(err, package){
		if(err) throw err;
		res.json(package)
	})
}

exports.post = function(req, res, next){
	var package = new Package(req.body)
	package.save(function(err, pack){
		if (err) throw err;
		res.json(pack)
	})
}

exports.delete = function(req, res, next){
	Package.remove({}, function(err, resp){
		if(err) throw err;
		res.json(resp)
	})
}