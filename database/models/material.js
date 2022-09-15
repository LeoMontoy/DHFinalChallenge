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
            type: dataTypes.STRING(50)
        }
    };
    let config = {
        tableName: "material",
        timestamps: false,
        underscored: true
    };
    const Material = sequelize.define(alias, cols, config);

    //RELACION MATERIAL-PRODUCTO 1:n HAS MANY
    Material.associate = function(models){
        
        Material.hasMany(models.Product, {
            as: "products",
            foreingKey: "product_id"
        })
    }    

    return Material;
}