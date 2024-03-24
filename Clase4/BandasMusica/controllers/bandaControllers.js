const index = require('../db/index')
const bandascontroller = {
    detalleBandas: function(req,res){
        let bandas = [index.lista];
        return res.render('detalleBandas', {
                                            nombre:bandas.nombre,
                                            integrante: bandas.integrantes,
                                            topCanciones: bandas.topCanciones,

        })},
    listadoBandas: function(req,res){
        let bandas = [index.lista];
        return res.render('listadoBandas', {
                                            id:bandas.id,
                                            video: bandas.video,
                                            cover: bandas.cover,

        })},
    genero: (req,res) => {
        return res.render('porGenero', {genero: index.lista.genero})},
    
    }
    /*res.render envia la vista, procesa el archivo EJS */
    

module.exports = bandascontroller;
