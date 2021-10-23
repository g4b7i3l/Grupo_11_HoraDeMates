module.exports = (sequelize, DataTypes) => {

    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nameId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        rols_id: {
            type: DataTypes.INTEGER,
            allowNull: false,

            
        }
    }
    let config = {
        timestamps: false,
    };
   
const User = sequelize.define(alias,cols,config);

User.associate = function(models){


User.hasMany(models.Rol, {
    as: "users",
    foreignKey: "rols_id"
});
User.belongsToMany(models.Product,{
    as : 'products',
    through : 'cart',
    foreignKey : 'users_id',
    otherKey : 'product_id'
})}

return User;

}