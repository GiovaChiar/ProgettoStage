// tabella books
const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports= (sequelize, DataTypes) => {
    const Books= sequelize.define("Books",{
        ISBN:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        Title: {
            type: DataTypes.STRING,
            allowNull: false, 
            },
            NameWriter:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            SurnameWriter:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            Type: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            Language: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            LocationInLibrary:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            NumberOfCopies:{
                type: DataTypes.INTEGER,
                allowNull: false, 
            }
    })
    Books.findByPk = async function (ISBN) {
        return this.findOne({ where: { ISBN: ISBN } });
      };    


      Books.associate = (models) => {
        Books.belongsToMany(models.User, {
          through: models.bookUser,
          foreignKey: 'ISBN',
          otherKey: 'idUser',
        });
      };
      
    module.exports = Books; 

    return Books;

}