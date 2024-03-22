const express = require('express');
const router = express.Router();

const datosAutos = require('../db/index');
router.get('/products', function (req, res) {
    res.send(datosAutos);
});

router.get('/products/brand', function (req,res) {
    let marcaProducto = req.params.id;
});

router.get('/products/color', function (req,res) {
    let colorProducto = req.params.id;
});

router.get('/products/modelo', function (req,res) {
    let modeloProducto = req.params.id;
});

router.get('/products/year', function (req,res) {
    let yearProducto = req.params.id;
});
    

module.exports = router;