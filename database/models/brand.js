const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Brands";
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
    const brand = sequelize.define(alias, cols, config);

    return brand;
}