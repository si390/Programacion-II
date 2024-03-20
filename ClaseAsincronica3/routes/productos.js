const express = require('express');
const productosController = require('../controllers/productosController');

const router = express.Router();


router.get('/:idProducto', productosController.index);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalle );
    


module.exports = router;