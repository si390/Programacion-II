var express = require('express');
var router = express.Router();

const bandaController = require('../controllers/bandaControllers');

/* GET home page. */
router.get('/', bandaController.index);

router.get('/id/:id', bandaController.detalle);

router.get('/genero/id/:id/:ok?', bandaController.genero);

module.exports = router;



