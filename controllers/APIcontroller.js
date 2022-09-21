const db = require("../database/models/index");
let sequelize = require('sequelize');
const APIcontroller = {
    products: function(req,res){
        let listProd = db.Product.findAll({
            include: [{association: "images"}, {association: "brand"}, {association: "color"}, {association: "material"}]
        })
        let lastProd = db.Product.findOne({
            order: [['id', 'DESC']],
            // include: [{ attributes: ['name']}],
            include: [{association: "images"}, {association: "brand"}, {association: "color"}, {association: "material"}]
          });
        
        Promise.all([listProd,lastProd])
            .then(function(result){
                console.log("Lectura en DB correcta")
                let resp = {
                    meta:{
                        status: 200,
                        total: result[0].length,
                        url: '/products'

                    },
                    data: result[0],

                    last: result[1]
                }
                console.log("Se ejecuto el .then"+result)
                return res.json(resp)
            })
            .catch(e => {
                console.log("Error en Controlador de Productos: "+e)
            })
    },
    lastProd: function(req,res){
        db.Product.findOne({
            order: [['id', 'DESC']],
            // include: [{ attributes: ['name']}],
           //include: [{association: "images"}, {association: "brand"}, {association: "color"}, {association: "material"}]
          })
          .then(function(result){
            console.log(result)
            res.redirect('/products/'+result.id)
        })
    },

    detalle: function(req,res){
        let prodID = req.params.id 

        db.Product.findByPk(prodID,{
            include: [{association: "images"}, {association: "brand"}, {association: "color"}, {association: "material"}]
        })
        .then(function(productos){
            console.log("Lectura en DB correcta")
            let resp = {
                meta:{
                    status: 200,
                    total: prodID,
                    url: '/products/'+prodID
                },
                data: {productos}
            }
            res.json(resp)
        })
        .catch(e => {
            console.log("Error en Controlador de Productos: "+e)
        })

         
    },


    

    brand: function(req,res){
        
    // CountByBrand. Cuenta la cantidad de productos por marca.
    let countByBrand = db.Product
        .findAll({
        include: [{ association: "brand", attributes: [] }],
        attributes: [
          [sequelize.literal('brand.name'), 'name'],
          [sequelize.fn('COUNT', sequelize.col('product.id')), 'count'],
        ],
        group: 'name',
      })
      .then(function(result){
        return res.json(result)
      })

    }


}
    
    
module.exports = APIcontroller