const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Brand";
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
        tableName: "brand",
        timestamps: false
    };
    const Brand = sequelize.define(alias, cols, config);

    // //RELACION MARCA-PRODUCTO 1:n HAS MANY
    // Brand.associate = function(models){
    //     Brand.hasMany(models.Product, {
    //         as: "product",
    //         foreingKey: "product_id",
    //         underscored: true
    //     })
    // }

    return Brand;
}