const bandas = require('../db/index');

const lista = bandas.lista;

const bandasController = {
  index: function (req, res) {
    return res.render('listadoBandas', { title: "Bandas", lista: lista });
  },
  detalle: function (req, res) {
    let banda;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id == req.params.id) {
        banda = lista[i];
      }
    }

    return res.render('detalleBandas', { title: "Detalle Bandas", banda: banda });
  },
  genero: function (req, res) {
    let banda;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id == req.params.id) {
        banda = lista[i];
      }
    }

    if (req.params.ok == "ok") {
      return res.render('porGenero', { title: "Genero de Banda", banda: banda, ok: true });
    } else {
      return res.render('porGenero', { title: "Genero de Banda", banda: banda, ok: false });
    }
  }
};

module.exports = bandasController;