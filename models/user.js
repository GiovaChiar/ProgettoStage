//tabella user
const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports= (sequelize, DataTypes) => {
    const Users= sequelize.define("user",{
        idUser: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Username:{
            type: DataTypes.STRING,
            allowNull: false, 
            validate: { 
                notEmpty: true
              }
        }, 
        Email: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: { 
                notEmpty: true
              }
            },
        Password:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        NameUser:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        SurnameUser: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
         Role:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
    })
    Users.findByPk = async function (idUser) {
        return this.findOne({ where: { idUser: idUser } });
      };    

    Users.associate = (models) => {
        Users.belongsToMany(models.Books, {
          through: models.bookUser,
          foreignKey: 'idUser',
          otherKey: 'ISBN',
        });
      };
      
    module.exports = Users; 
    return Users;
}