const modulo = require('nombreModulo');
modulo.propiedad;
modulo.funcionalidad();

const fs = require('fs');
fs.propiedad;
const moment = require('moment');
moment.propiedad;
const series = {
	lista: [ 
        {titulo: 'Mad Men', temporadas: 7},
	    {titulo: 'Breaking Bad', temporadas: 5},
		{titulo: 'Seinfeld', temporadas: 9},
]};

module.exports = series;

const series = require('./Clase1/modulo');
