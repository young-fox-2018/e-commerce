var express       = require('express');
var router        = express.Router();
const controller  = require('../controllers/itemController')

router.get('/',controller.findall)
router.post('/',controller.create)
router.delete('/:id',controller.delete)
router.get('/:id',controller.findone)
router.put('/edit/:id',controller.itemupdating)



module.exports = router;
