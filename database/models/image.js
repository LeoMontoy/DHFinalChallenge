const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Image";
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
        timestamps: false,
        underscored: true
    };
    const Image = sequelize.define(alias, cols, config);

//DEFINO RELACIONES ENTRE TABLAS
    //RELACION PRODUCTO-IMAGENES 1:n HAS MANY

    Image.associate = function(models){
        Image.belongsTo(models.Product, {
            as: "product",
            foreingKey: "product_id"
        })
    }

    return Image;
}