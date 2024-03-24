var express = require('express');
var router = express.Router();
var bandasController = require('../controllers/bandaControllers');

/* GET bandas page. */
router.get('/', bandasController.listadoBandas); {
    let idBanda = req.params.id;
    res.send(idBanda);
};

router.get('/:id', bandasController.detalleBandas); {
    let idBanda = req.params.id;
    res.send(idBanda);
};

router.get('/genero}', bandasController.genero); {
    let idBanda = req.params.id;
    res.send(idBanda);
};

 

module.exports = router;



