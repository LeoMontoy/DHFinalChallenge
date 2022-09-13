const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
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
        timestamps: false
    };
    const product = sequelize.define(alias, cols, config);

//DEFINO RELACIONES ENTRE TABLAS
    //RELACION PRODUCTO-IMAGENES 1:n HAS MANY
    product.associate = function(models){
        product.hasMany(models.images, {
            as: "images",
            foreingKey: "product_id"
        })
    }

    return product;
}