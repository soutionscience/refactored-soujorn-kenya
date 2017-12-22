var express = require ('express');
var router = express.Router()

var controller = require('../controllers/package.controller.js')

router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.delete)

router.route('/:packageId')
.delete(controller.deleteOne)

module.exports = router;