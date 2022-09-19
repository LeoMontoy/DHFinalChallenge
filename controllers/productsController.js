const db = require("../database/models/index");
const {validationResult} = require('express-validator');


let productsController = {

    list: function(req,res){
        db.Product.findAll({
            include: [{association: "images"}, {association: "brand"}, {association: "color"}, {association: "material"}]
        })
            .then(function(productos){
                console.log("Lectura en DB correcta")
                res.render("listado", {productos:productos})
            })
            .catch(e => {
                console.log("Error en Controlador de Productos: "+e)
            })
    },

    create: function(req,res){
        let marcas=db.Brand.findAll()
        let colores=db.Color.findAll()
        let material=db.Material.findAll()
        let errors = []
        Promise.all([marcas,colores,material, errors])
        .then(function([marcas, colores, material,errors]){
                console.log("Lectura en DB correcta")
                res.render("createProd", {colores, marcas, material,errors})
            })
            .catch(e => {
                console.log("Error en ProductController.create: "+e)
            })
    },
    
    add: function(req,res){
        let marcas=db.Brand.findAll()
        let colores=db.Color.findAll()
        let material=db.Material.findAll()
        const validation = validationResult(req)
        Promise.all([marcas,colores,material, validation])
       
            //console.log(validation.errors)

            .then(function([marcas, colores, material,errors]){
                if(validation.errors.length > 0){
                console.log("Lectura en DB correcta OK")
                console.log( validation.mapped())
                res.render("createProd", {marcas, colores, material, errors: validation.mapped()})
            } else{
                        db.Product.create({
                            ...req.body
                        })  
                }
            })

  
        .then(function(prods){
            console.log("Esto recibi del form: "+prods)
            res.redirect("/createimg")
        })
        .catch(e => {
            console.log("Error en ProductController.add: "+e)
        })

    },

    createimg: function(req,res){
        let productos = db.Product.findAll()
        .then(function(productos){
                console.log("Lectura en DB correcta")
                res.render("imgProd", {productos})
            })
            .catch(e => {
                console.log("Error en ProductController.createimg: "+e)
            })
    },

    addimg: function(req,res){

        db.Image.create({
            ...req.body
        })  
        .then(function(){
            res.redirect("/")
        })
    },

    edit: function(req,res){
        
        let productoId = req.params.id
        let producto = db.Product.findByPk(productoId)
        let marcas=db.Brand.findAll()
        let colores=db.Color.findAll()
        let material=db.Material.findAll()
        Promise.all([producto,marcas,colores,material])
        .then(function([producto, marcas, colores, material]){
                console.log("Lectura en DB correcta")
                res.render("editProd", {producto, colores, marcas, material})
              
            })
            .catch(e => {
                console.log("Error en ProductController.create: "+e)
            })
        
    },

    update: function(req,res){
        let productId = req.params.id

        db.Product.update({
            ...req.body
        },
        {
            where: {id: productId}
        })
        .then(function(prods){
            console.log("Esto recibi del form: "+prods)
            res.redirect("/")
        })
        .catch(e => {
            console.log("Error en ProductController.update: "+e)
        })

    },

    

    delete: function(req,res){

            let productId = req.params.id
    
            db.Product
            .findByPk(productId)
            .then(producto => {
    
                res.render("deleteProd", {producto})
    
            })
            
    },

    destroy: function (req,res) {
        let productId = req.params.id
        db.Product
        .destroy({ where: { id: productId }})
        .then(()=> {

            res.redirect("/")

        })
        .catch(error => res.send(error))

    }

}

module.exports = productsController;
