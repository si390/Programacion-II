let moviesController = {
    index: function(req, res){
        db.Movie.findAll()
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
       //Completar
       let ultimaPelicula = req.body.title;
       req.session.lastMovie = ultimaPelicula;
       //return res.send(req.session)
       return res.redirect('/')
    }

}


module.exports = moviesController