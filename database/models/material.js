const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Material";
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
        tableName: "material",
        timestamps: false
    };
    const Material = sequelize.define(alias, cols, config);

    // //RELACION MATERIAL-PRODUCTO 1:n HAS MANY
    // Material.associate = function(models){
    //     Material.hasMany(models.Product, {
    //         as: "product",
    //         foreingKey: "product_id",
    //         underscored: true
    //     })
    // }    

    return Material;
}