module.export =(sequelize, dataTypes) =>{
    let alias ="Categoria";
    let cols = { 
    id: {
        type:dataTypes.INTEGER(11),
        primary:true,
        autoIncrement: true,
        
    }
    }
    let config = {
        tableName:"categorias",
        timesTamps:false,
    }
    const Categoria = sequelize.define(alias, cols, config);
return Categoria
}