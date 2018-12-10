var express       = require('express');
var router        = express.Router();
const controller  = require('../controllers/categoryController')


router.get('/',controller.findall)
router.post('/',controller.create)
router.delete('/:id',controller.delete)

module.exports=router
