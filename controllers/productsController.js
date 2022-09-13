let db = require("../database/models");

let productsController = {
    list: function(req,res){
        db.Products.findAll()
            .then(function(productos){
                res.render("index", {productos:productos})
            })
    }
}


module.exports = productsController;