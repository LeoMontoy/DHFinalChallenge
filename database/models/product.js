const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING(500)
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        material_id: {
            type: dataTypes.INTEGER
        },
        color_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    };
    const Product = sequelize.define(alias, cols, config);

//DEFINO RELACIONES ENTRE TABLAS
    
    Product.associate = function(models){

    //RELACION PRODUCTO-IMAGENES 1:n HAS MANY
        Product.hasMany(models.Image, {
            as: "images",
            foreingKey: "product_id"
        })

    //RELACION PRODUCTO-MATERIAL N:1 BELONGSTO
        Product.belongsTo(models.Material,{
            as:"material",
            foreingKey: "material_id"
        })

    //RELACION PRODUCTO-MARCA N:1 BELONGSTO
        Product.belongsTo(models.Brand,{
            as:"brand",
            foreingKey: "brand_id"
        })

    //RELACION PRODUCTO-COLOR N:1 BELONGSTO
        Product.belongsTo(models.Color,{
            as:"color",
            foreingKey: "color_id",
            underscored: true
        })
        

    }





    return Product;
}