const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Materials";
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
    const material = sequelize.define(alias, cols, config);

    return material;
}