module.exports =(sequelize, dataTypes ) =>{
	let alias ="Producto";
	let cols = { 
        id: {
            type:dataTypes.INTEGER(11),
            primaryKey:true,
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
        categorias_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }
	let config = {
        tableName: "productos",
		timestamps:false
    }
	const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = (models) => {
        Producto.belongsTo(models.Categoria, {
            as: "Categoria",
            foreignKey: "categorias_id"//producto pertenece a una categria
        })
        Producto.hasMany(models.Imagen, {
            as: "imagenes",
            foreignKey: "producto_id"
        })
    }


 return Producto;
}