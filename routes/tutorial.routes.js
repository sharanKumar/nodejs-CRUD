const turorialController = require('../controller/tutorials.controller.js');
const auth = require('../auth/auth.js');
const router = require('express').Router();

router.post('/',auth.verifyToken,turorialController.create)

router.get('/',auth.verifyToken,turorialController.findAll)
router.get('/published',auth.verifyToken,turorialController.findAllPublished)
router.get('/:id',auth.verifyToken,turorialController.findOne)
router.put('/:id',auth.verifyToken,turorialController.update)
router.delete('/:id',auth.verifyToken,turorialController.delete)
router.delete('/:id',auth.verifyToken,turorialController.deleteAll)
router.post('/generateToken',auth.generateToken)


module.exports = router;


