var express = require('express');
var router = express.Router();
var bandasController = require('../controllers/bandaControllers');


/* GET bandas page. */
router.get('/', bandasController.detalleBandas); 

router.get('/:id', bandasController.listadoBandas);

router.get('/genero', bandasController.genero);

 
module.exports = router;



