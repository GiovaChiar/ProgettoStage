const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const Books= require("./books")
const User = require("../models/user")

const BookUser = sequelize.define('BookUser', {
  idBookUser: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
});

// Definisci le associazioni separatamente, specificando i nomi delle colonne personalizzati
BookUser.belongsTo(Books, { foreignKey: 'BookISBN' });

User.belongsToMany(Books, { 
  through: {
    model: BookUser,
    unique: false,
    foreignKey: 'userIdUser',
    otherKey: 'BookISBN',
  },
});

module.exports = { BookUser }; 