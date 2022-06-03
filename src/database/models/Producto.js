module.export =(sequelize, dataTypes ) =>{
	let alias ="Producto";
	let cols = { 
	id: {
		type:dataTypes.INTEGER(11),
		primary:true,
		autoIncrement: true,
    },
    name: {
        type: dataTypes.STRING(45),
        allowNull: false,
    },
    price: {
        type: dataTypes.INTEGER(11),
        allowNull: false,
    },
    description: {
        type: dataTypes.TEXT,
        allowNull: false,
    },
    stock: {
        type: dataTypes.BOOLEAN,
        allowNull: false,
    },
    
    }
	let config = {
        tableName: "productos",
		timestamps: false,
	}

	const Producto = sequelize.define(alias, cols, config);

    Producto.associate = (models) => {
        Producto.hasMany(models.Detalle, {
            as: "detalles",//tabla detalle ficticio
            foreignKey: "producto_id"
        })

        Producto.belongsToMany(models.Categoria, {
            as: "categorias",
            through: "productos_categorias",
            foreignKey: "producto_id",
            otherKey: "categoria_id"
        })
    }

        Producto.belongsToMany(models.Usuario, {    
            as: "usuarios",
            foreignKey: "id",
        })

 return Producto;
}