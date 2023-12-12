'use strict'

var mariadb = require('mariadb');
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host:"localhost", 
    user:"root", 
    password: "root",
    database:"libreria"
  });

  async function executeQuery(sql, res) {

    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection();
            return resolve(await conn.query(sql, res));
            conn.close()
            
        } catch (err) {
            reject(err)
        }
       conn && conn.release()
    });

}

executeQuery('select 1 as hello').then(console.log).catch(console.err);
//metodo per esporre la connessione al db
module.exports = executeQuery