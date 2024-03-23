var express = require('express');
var router = express.Router();
var heroesController = require('../controllers/heroeController');

/* GET heroes page. */
router.get('/', function(req, res) {
    res.end(JSON.stringify(heroesController));;
});

router.get('/detalle/id/{id}', function (req,res) {
    res.send(heroesController.nombre);
});

 

module.exports = router;



