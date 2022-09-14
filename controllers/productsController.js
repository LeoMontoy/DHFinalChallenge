const db = require("../database/models/index");

let productsController = {
    list: function(req,res){
        db.Product.findAll({
            include: [{association: "images"}]
        })
            .then(function(productos){
                console.log("Lectura en DB correcta")
                res.render("listado", {productos:productos})
            })
            .catch(e => {
                console.log("Error en Controlador de Productos: "+e)
            })
    }
}

module.exports = productsController;
