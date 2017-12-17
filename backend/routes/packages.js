var express = require ('express');
var router = express.Router()

var controller = require('../controllers/package.controller.js')

router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.delete)


module.exports = router;