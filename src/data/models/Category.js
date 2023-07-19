module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: true
        }
    };
    let config = {
        timestamps: false,
    }
    const Category = sequelize.define(alias, cols,config);

    Category.associate=((models)=>{
        
        Category.hasMany(models.Product,
            {
                as: "products",
                foreignKey: "category_id",
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (User)
 
    return Category
};