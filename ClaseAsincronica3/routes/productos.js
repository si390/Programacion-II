let express = require('express');
let productosController = require('../controllers/productosController');

let router = express.Router();


router.get('/:idProducto', productosController.index);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalle );
    


module.exports = router;