const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Colors";
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
    const color = sequelize.define(alias, cols, config);

    return color;
}