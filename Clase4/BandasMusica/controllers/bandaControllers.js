var bandas = require('../db/index')
const controller = {
    nombre: (req,res) => {
        req.send("Lista de bandas " + bandas.id)},
    integrante: (req,res) => {
        req.send("Listado de integrantes de la banda " + bandas.lista.integrantes)},
    genero: (req,res) => {
        req.send("Lista de genero de la banda " + bandas.lista.genero)},
    topCanciones: (req,res) => {
        req.send("Listado de TopCanciones de la banda " + bandas.lista.topCanciones)},
    cover: (req,res) => {
        req.send("Lista de covers de la banda " + bandas.lista.cover)},
    id: (req,res) => {
        req.send("Id de la banda " + bandas.lista.id)},
    video: (req,res) => {
        req.send("Lista de videos de la banda " + bandas.lista.video)},
}

module.exports = controller;
