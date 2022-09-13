const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Images";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "images",
        timestamps: false
    };
    const image = sequelize.define(alias, cols, config);

//DEFINO RELACIONES ENTRE TABLAS
    //RELACION PRODUCTO-IMAGENES 1:n HAS MANY
    product.associate = function(models){
        product.belongsTo(models.products, {
            as: "products",
            foreingKey: "product_id"
        })
    }

    return image;
}