var heroes = require('../db/science')
const controller = {
    id: (req,res) => {
        res.render("Lista de heroes " + heroes.id)},
    nombre: (req,res) => {
        res.render("Listado de marca de autos " + heroes.lista.nombre)},
    profesion: (req,res) => {
        res.render("Lista de colores de autos " + heroes.lista.profesion)},
    resenia: (req,res) => {
        res.render("Lista de autos por año " + heroes.lista.resenia)},
}

module.exports = controller;
