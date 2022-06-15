module.exports =(sequelize, dataTypes) =>{
    let alias ="Imagen";
    let cols = { 
    id: {
        type:dataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement: true,
    },
    name: {
        type: dataTypes.STRING(50),
        allowNull: false,
    },
    producto_id:{
        type: dataTypes.INTEGER(11),
        allowNull:false
}
    }
    let config = {
        tableName:"imagenes",
        timestamps:false
    }
    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = (models) => {
        Imagen.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "producto_id"
        })
    }
    
    return Imagen

}