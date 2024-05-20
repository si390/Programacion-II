let express = require('express');
let router = express.Router();

let moviesController = require('../controllers/moviesController')

//Aquí las rutas
router.get('/', moviesController.index);
router.get('/id/:id', moviesController.show);
router.get('/movienew', moviesController.create);
router.post('/create', moviesController.store);
router.get('/results', moviesController.search);



module.exports = router;