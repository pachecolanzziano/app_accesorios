module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(60),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid:true
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate=((models)=>{
        Product.belongsTo(models.Category,
            {
                    as: "category",
                    foreignKey: "category_id"
            }
        )
    })

    return Product
};