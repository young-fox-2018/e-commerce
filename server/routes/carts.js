var express       = require('express');
var router        = express.Router();
const controller  = require('../controllers/cartController')


router.get('/',controller.findall)
router.post('/',controller.create)
router.delete('/:id',controller.delete)
// router.put('/:id',controller.update)

module.exports=router
