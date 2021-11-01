module.exports = (sequelize, DataTypes) => {

    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categories_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       
    }
    let config = {
        tableName:"products",
        timestamps: false,
    };
   
const Product = sequelize.define(alias,cols,config);

Product.associate = function(models){
Product.belongsTo(models.Category , {
    as: "Category",
    foreignKey: "categories_id"
});

Product.belongsToMany(models.User,{
    as : 'users',
    through : 'cart',
    foreignKey : 'product_id',
    otherKey : 'users_id'
})
}

return Product;

}