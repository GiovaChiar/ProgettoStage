const http = require('http');
const express = require('express'), bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

const mariadb = require('mariadb');
const { error } = require('console');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password'
});
app.get('/get',async(req,res)=>{
    let conn;
    try{
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * from progettoFormazione.User');
        const jsonS = JSON.stringify(rows);
        console.log('WOW angular sei tu?')
        res.send(rows);
    }catch(e){
        console.log('Errore');
    }finally{
        conn.close();
    }
});
app.get('/', (req, res) => { 
    res.send('Main page'); 
});
app.post('/', async(req, res)=>{
    let conn;
    try{
        conn = await pool.getConnection();
        //const rows = await conn.query('INSERT INTO progettoFormazione.User(Username,Email,Password) VALUES (\'pie\',\'pie@mail.it\',\'1234\')');
        res.send('Post success');
    }catch(e){
        console.log('Errore post');
    }finally{
        conn.close();
    }
});
app.post('/second', function(request, response){
    //let conn;
    try{
        console.log('Ang')
        console.log(request.body.user);
        var jsonRequest = request.body;
        var jsonResponse = {};
        jsonResponse.result = jsonRequest.val1 + jsonRequest.val2;
        console.log(jsonResponse.result.stringify)
        response.send(jsonResponse);
        //conn = await pool.getConnection();
        //const rows = await conn.query('INSERT INTO progettoFormazione.User(Username,Email,Password) VALUES (\'pie\',\'pie@mail.it\',\'1234\')');
    }catch(e){
        console.log('Errore post');
    }finally{
        //conn.close();
    }
});
http.createServer(app).listen(4000, ()=>{
    console.log('Port 4000 started');
});