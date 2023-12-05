var mariadb = require('mariadb');
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host:"localhost", 
    user:"root", 
    password: "password",
    database:"progettoFormazione"
  });

//metodo per esperrore la connessione al db
module.exports = Object.freeze({
  pool: pool
});