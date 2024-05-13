const db = require('../database/models')
const movie = db.Movie

const indexController ={
    index: function (req, res){
        let filtrado = {
            where: [{awards: 1}, {length: 120}],
        
        };
        movie.findAll(filtrado)
        .then(function(results){
            return results. render("movies", {listaPeliculas: results})
        })
        .catch(function(err){
            return console.log(err);
        })  
    }
}

