const controller = {
    index: (req,res) => {
        res.send("Lista de autos " +
        req.params.idProducto)},
    marca: (req,res) => {
        res.send("Listado de marca de autos " +
        req.params.idProducto)},
    color: (req,res) => {
        res.send("Lista de colores de autos " +
        req.params.idProducto)},
    anio: (req,res) => {
        res.send("Lista de autos por año " +
        req.params.idProducto)},
}

module.exports = controller;
