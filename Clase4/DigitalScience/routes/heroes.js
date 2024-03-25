var express = require('express');
var router = express.Router();
var heroesController = require('../controllers/heroeController');

/* GET heroes page. */
router.get('/', function(req, res) {
    res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.');;
});

router.get('/heroes', function (req,res) {
    res.send(heroesController.id);
});

router.get('/heroes/detalle/id/:id', function (req,res) {
    res.send(heroesController.nombre);
});

router.get('/heroes/detalle/id/:id/?ok', function (req,res) {
    res.send(JSON.stringify(heroesController.resenia));
});
 
router.get('/creditos', function (req,res) {
    res.send('Hecho con ❤️ en Programación 2');
});


module.exports = router;



