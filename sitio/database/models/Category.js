module.exports = (sequelize, DataTypes) => {

    let alias = "Category";
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
    }
    let config = {
        timestamps: false,
    };

   
const Category = sequelize.define(alias,cols,config);

Category.associate = function(models){
    Category.hasMany(models.Product , {
        as: "categories",
        foreignKey: "categories_id"
    })
    }
    

return Category;

}