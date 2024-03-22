var express = require('express');
const productosController = require('../controllers/productController');

const router = express.Router();


router.get('/', productosController.index);

router.get('/marca', productosController.marca);
 
router.get('/color', productosController.color);

router.get('/anio', productosController.anio);



module.exports = router;