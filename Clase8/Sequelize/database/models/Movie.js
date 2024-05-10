const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movies', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        tableName: "UsuariosVIP"
        });
    return Movie;
}