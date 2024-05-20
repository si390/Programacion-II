let moviesController = {
    index: function(req, res){
        let movieList = ['Rocky', 'Batman', 'Barbie', 'Iron Man'];
        return res.render('movies', { title: 'Movies', listaPelis: movieList});
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
        let info = req.body;
        req.session.lastMovie = info;

        res.cookie('lastMovie', info.title, { maxAge: 1000*60*5 })

        return res.redirect('/');
    }

}


module.exports = moviesController