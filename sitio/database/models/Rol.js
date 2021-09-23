module.exports = (sequelize, DataTypes) => {

    let alias = "Rol";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
   
const Rol = sequelize.define(alias,cols,config);

Rol.associate = function(models){


Rol.belongsTo(models.User, {
    as: "rols",
    foreignKey: "rols_id"
})};

return Rol;

}