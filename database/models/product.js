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
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);

//DEFINO RELACIONES ENTRE TABLAS
    //RELACION PRODUCTO-IMAGENES 1:n HAS MANY
    Product.associate = function(models){
        Product.hasMany(models.Image, {
            as: "images",
            foreingKey: "product_id",
            underscored: true
        })
    }

    // //RELACION PRODUCTO-MARCA N:1 BELONGSTO
    // Product.associate = function(models) {
    //     Product.belongsTo(models.Brand,{
    //         as:"brand",
    //         foreingKey: "brand_id",
    //         underscored: true
    //     })
    // }
    // //RELACION PRODUCTO-MATERIAL N:1 BELONGSTO
    // Product.associate = function(models) {
    //     Product.belongsTo(models.Material,{
    //         as:"material",
    //         foreingKey: "material_id",
    //         underscored: true
    //     })
    // }

    // //RELACION PRODUCTO-COLOR N:1 BELONGSTO
    // Product.associate = function(models) {
    //     Product.belongsTo(models.Color,{
    //         as:"color",
    //         foreingKey: "color_id",
    //         underscored: true
    //     })
    // }

    return Product;
}