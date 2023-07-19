module.exports = (sequelize, dataTypes) => {
    let alias = 'Type';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        timestamps: false
        
    }
    const Type = sequelize.define(alias, cols, config); 

    Type.associate=((models)=>{
        
        Type.hasMany(models.User,
            {
                as: "users",
                foreignKey: "type_id",
            }
        )

    })

    return Type
};