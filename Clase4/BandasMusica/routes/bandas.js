var express = require('express');
var router = express.Router();
var bandasController = require('../controllers/bandaControllers');

/* GET bandas page. */
router.get('/', function(req, res) {
    res.render('listadoBandas')
});
router.get('/', function(req, res) {
    res.send(JSON.stringify(bandasController))
});

router.get('/detalle', function(req, res) {
    res.render('detalleBandas')
});

router.get('/detalle/id/{id}', function (req,res) {
    res.send(bandasController.nombre);
});

 

module.exports = router;



