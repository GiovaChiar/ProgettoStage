'use strict'
if (process.env.NODE_ENV!== "production"){
    require("dotenv").config()
}
const express= require("express")
const app= express()
const flash= require("express-flash")
const session= require("express-session")
const executeQuery= require("./moduls/db")
const mariadb= require('mariadb')
const path = require('path');
const cors= require('cors')


app.use(cors())

app.use(express.json())   // uso di json
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


app.post("/registrazione", function (req, res, next){
    const Username= req.body.Username
    const Email= req.body.Email
    const Password= req.body.Password
    const Cognome= req.body.Cognome
    const Nome= req.body.Nome
    
    const rows = executeQuery(`SELECT * from utenti WHERE Email= "${Email}" `);
    rows.then(function(email,username){
    if(email == 0 || username == 0){
        executeQuery(`INSERT into utenti(Username,Email,Password,Cognome,Nome) values('${Username}','${Email}','${Password}','${Cognome}','${Nome}')`).then(() => {
            res.send('Registrazione effettuata!');
        })
    }else {
        res.send("Email o Username non validi!");
    }
})})

    //GET di un user con identificativo id per la rimozione del record 
    app.get('/user/delete/:id', function(req,res,next){
        var id= req.body.id
        var query= `DELETE FROM utenti WHERE id = "${id}"`
        executeQuery(query,function(error,data){
            if(error){
                throw err;
            }else{
                response.redirect("/login");
            }
        });
    })

// POST LOGIN utente in tabella utenti. Il json richiede come paramtri Username,Email,Password li acquisisce e li invia al database tramite query Insert 
/*app.post("/login", function(request,result, next){
        const username= request.body.username
        const email= request.body.Email
        const password= request.body.password

        const rows = executeQuery(`SELECT * from utenti WHERE Email= "${email}" `);
       
        rows.then(function(username,password){
        if(rows.username == "" || rows.password == ""){
        result.send("Email o password non corrette");
            }else{ 
                executeQuery(`INSERT into login(Username,Email,Password) values('${username}','${email}','${password}')`).then(() => {
                result.send("Login effettuato!")
            })}})
    })
*/


//LOGIN PROVA
app.post('/login',  (req, res)=> { 
    const sql= "SELECT * FROM login WHERE username = ? AND email= ? AND password = ? ";
    const values= [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    executeQuery(sql, values, (err,data) => {
        if(err) return res.json("LOGIN FAILED");
        return res.json(data);
    })
})




//------------------------------------------------------
                
// AGGIUNTA DI UN LIBRO CON VERIFICA CHE L'ISBN NON SIA DIVERSO DA 13
app.post("/registrazione-libro", function(request,result,next){
    const isbn= request.body.isbn
    const titolo= request.body.titolo
    const NomeAutore= request.body.NomeAutore
    const CognomeAutore= request.body.CognomeAutore
    const Genere= request.body.Genere
    const Lingua= request.body.Lingua
    const PosizioneInLibreria= request.body.PosizioneInLibreria
    const NumeroDiCopie= request.body.NumeroDiCopie

    const rows = executeQuery("SELECT * from login ");
    if (isbn.length != 13){
        result.send("Il codice ISBN inserito è sbagliato!") 
    }
    else{
    executeQuery(`INSERT into libri(isbn,titolo,NomeAutore,CognomeAutore,Genere,Lingua,PosizioneInLibreria,NumeroDiCopie) values('${isbn}','${titolo}','${NomeAutore}','${CognomeAutore}','${Genere}','${Lingua}','${PosizioneInLibreria}','${NumeroDiCopie}')`).then(() => {
    result.send("Libro registrato")
    })
}})

app.listen(23456);  