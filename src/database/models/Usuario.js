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
        type: dataTypes.STRING(100),
        allowNull: false,
    },
    avatar: {
        type: dataTypes.STRING(100),
        allowNull: false,
    },
    rol: {
        type: dataTypes.STRING(40),
        allowNull: false,
    },
    password: {
        type: dataTypes.STRING(100),
        allowNull: false,
    }
    }

    let config = {
        tableName:"usuarios",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config);
    
   


return Usuario
}