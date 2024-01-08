const { dialect } = require("../config/dbConfig.js");
const dbConfig= require("../config/dbConfig");

const {Sequelize, DataTypes}= require('sequelize') 
const sequelize= new Sequelize(

    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            //max: dbConfig.pool.max,
            //min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    })
    
    sequelize.authenticate().then(()=>{
        console.log('connected')
    })
    .catch(err => {
        console.log('Error'+ err) 
    })

    const db= {}

    db.Sequelize= Sequelize
    db.sequelize= sequelize

    db.USER= require ('./user.js')(sequelize, DataTypes)
    db.Books= require('./books.js')(sequelize,DataTypes)


    db.sequelize.sync({force: false}) // se imposti il force a true ogni volta che  esegui l'operazione perderai il contenuto della tabhella 
    .then(() => {
        console.log('re-sync done!')
    })

    module.exports= db