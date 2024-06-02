module.exports = function(sequelize, dataTypes){
    // Definir un alias.
        let alias = 'Genre'; // Con este alias Sequelize va a poder identificar internamente al archivo de modelo.
    // Describir la configuracion de las columnas de la tabla
        let cols = {
            id:{
                autoincrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            name:{
                type: dataTypes.INTEGER,
            },
            ranking:{
                type: dataTypes.DATE,
            },
            active:{
                type: dataTypes.INTEGER,
            },
        }
        let config = {
            tableName:'genres',
            timestamps: false, // Si la tabla no tiene los campos created_at y updated_at
            underscore: true, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
        }
        const Genre = sequelize.define(alias,cols,config);

        Genre.associate=function(models){
            Genre.hasMany(models.Movie,{
                as : "movies",
                foreignKey: "genre_id"
            })
        }
    
           
        return Genre;
    }