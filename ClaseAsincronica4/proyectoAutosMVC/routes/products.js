const express = require('express');
const productosController = require('../controllers/productController');

const router = express.Router();


router.get('/:idProducto', productosController.index);

router.get('/:idProducto/marca', productosController.marca);
 
router.get('/:idProducto/color', productosController.color);

router.get('/:idProducto/anio', productosController.anio);


module.exports = router; 

