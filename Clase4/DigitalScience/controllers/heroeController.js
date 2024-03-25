var heroes = require('../db/science')
const controller = {
    id: (req,res) => {
        res.send("Lista de heroes " + JSON.stringify(heroes.lista))},
    nombre: (req,res) => {
        res.send("Listado de nombre de heroes " + JSON.stringify(heroes.lista.nombre))},
    profesion: (req,res) => {
        res.send("Lista de profesiones de heroes " + JSON.stringify(heroes.lista.profesion))},
    resenia: (req,res) => {
        res.send("Reseña de heroes " + JSON.stringify(heroes.lista.resenia))},
}

module.exports = controller;
