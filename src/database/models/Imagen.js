module.export =(sequelize, dataTypes) =>{
    let alias ="Imagen";
    let cols = { 
    id: {
        type:dataTypes.INTEGER(11),
        primary:true,
        autoIncrement: true,
    },
    name: {
        type: dataTypes.STRING(50),
        allowNull: false,
    }
    }
    let config = {
        tableName:"imagenes",
        timesTamps:false,
    }
    const Imagen = sequelize.define(alias, cols, config);
return Imagen
}