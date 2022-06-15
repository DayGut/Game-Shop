module.exports =(sequelize, dataTypes) =>{
    let alias ="Categoria";
    let cols = { 
    id: {
        type:dataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement: true,
        
    },
    name: {
        type: dataTypes.STRING(50),
        allowNull: false,
    }
    }
    let config = {
        tableName:"categorias",
        timestamps:false
        
    }
    const Categoria = sequelize.define(alias, cols, config);
    
    Categoria.associate = (models) => {
        Categoria.hasMany(models.Producto, {
            as: "Producto",
            foreignKey: "categorias_id"
        })
    }

return Categoria
}