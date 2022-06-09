module.exports =(sequelize, dataTypes) =>{
    let alias ="Usuario";
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
    email: {
        type: dataTypes.STRING(50),
        allowNull: false,
    },
    avatar: {
        type: dataTypes.STRING(100),
        allowNull: false,
    },
    rol: {
        type: dataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: dataTypes.STRING(100),
        allowNull: false,
    },
    productos_id:{
        type:dataTypes.INTEGER(11),
        allowNull: false,
    }

    }

    let config = {
        tableName:"usuarios",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config);
    
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "productos_id"
        })
    }


return Usuario
}