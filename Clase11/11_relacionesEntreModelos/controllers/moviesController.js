let db = require("../database/models/");

let moviesController = {
    index: function(req, res){
        db.Movie.findAll({
            include:[
                {association:"genre"}
            ]
        })
            .then(function(data){
                return res.send(data)
            })
            .catch(function(error){
                return console.log(error);
            })
        
        //let movieList = ['Rocky', 'Batman', 'Barbie', 'Iron Man'];
        //return res.render('movies', { title: 'Movies', listaPelis: movieList});
    },
    show: function(req, res){
        return res.send(`Estamos en el detalle de la película: ${req.params.id}`)
    },
    create: function(req, res){
        return res.render('movieNew', {title: 'nueva película'} )
    },
    search: function(req, res){
        let searchTerm = req.query.search
        return res.render('searchResults', { title: 'Resultados de búsqueda', searchTerm })
    },
    store: function(req, res){
       //Completar con guardado de la película en base de datos

       let ultimaPelicula = req.body.title;
       req.session.lastMovie = ultimaPelicula;
       //return res.send(req.session) //solo para chequear que se guardó.
       //Crear cookie.
       res.cookie('lastTitle', ultimaPelicula, {maxAge:1000*60*0.5})
       return res.redirect("/")

    }

}


module.exports = moviesController