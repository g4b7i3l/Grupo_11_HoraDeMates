module.exports = (sequelize, DataTypes) => {

    let alias = "Cart";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
    let config = {
        tablename: "cart",
        timestamps: false,
    };
   
const Cart = sequelize.define(alias,cols,config);

return Cart;

}