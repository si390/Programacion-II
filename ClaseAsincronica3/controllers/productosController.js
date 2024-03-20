const controller = {
    index: (req,res) => {
        res.send("Bienvenidos al detalle del producto " +
        req.params.idProducto)},
    detalle: (req,res) => {
        if (req.params.idComentario == undefined) {
            res.send("Bienvenidos al detalle del producto " +
            req.params.idProducto);
        }else{
                res.send("Bienvenidos al detalle del producto " +
                req.params.idProducto + " y estás enfocado en el comentario "+ req.params.idComentario);
            };
        }
}

module.exports = controller;
