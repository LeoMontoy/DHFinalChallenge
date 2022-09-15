const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Color";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "color",
        timestamps: false
    };
    const Color = sequelize.define(alias, cols, config);

    //RELACION COLOR-PRODUCTO 1:n HAS MANY
        Color.associate = function(models){
            Color.hasMany(models.Product, {
                as: "product",
                foreingKey: "product_id",
                underscored: true
            })
    } 
    return Color;
}




