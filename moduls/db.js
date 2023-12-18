'use strict'

var mariadb = require('mariadb');
 
// Create a connection pool
var pool = mariadb.createPool({
  host:"localhost", 
  user:"root", 
  password: "root",
  database:"libreria"
});

async function executeQuery(sql, params = []) {
	let conn;
    try {
    	conn = await pool.getConnection();
      return conn.query(sql, params);
    } catch (err) {
    	if (conn) {
        conn.release(); //release to pool
    }
	}
}

//metodo per esporre la connessione al db
module.exports = executeQuery
