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
const cors= require('cors')


app.use(express.json())   // uso di json
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Post registrazione utente in tabella utenti. Il json richiede come paramtri Username,Email,Password,Nome,Cognome li acquisisce e li invia al database 
app.post("/registrazione", function (req, res, next){
    const Username= req.body.Username
    const Email= req.body.Email
    const Password= req.body.Password
    const Cognome= req.body.Cognome
    const Nome= req.body.Nome
    
    const rows = executeQuery(`SELECT * from utenti WHERE Email= "${Email}" `);
    rows.then(function(email,username){
    if(email == 0 || username == 0){
        executeQuery(`INSERT into utenti(Username,Email,Password,Cognome,Nome) values('${Username}','${Email}','${Password}','${Cognome}','${Nome}')`,function(er,res){
            res.send("Utente registrato con successo")
            res.send(rows)
        })
    }else {
        res.send("Email o Username non validi!");
    }
})})

    

    //Delete di un user con identificativo id per la rimozione del record 
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

// Post LOGIN utente in tabella utenti. Il json richiede come paramtri Username,Email,Password li acquisisce e li invia al database tramite query Insert 
app.post("/login", function(request,result, next){
        const username= request.body.username
        const email= request.body.Email
        const password= request.body.password
        const rows = executeQuery("SELECT * from login");
        if(result.length > 0){
             result.send("La mail inserita esiste");
        }  else {
                executeQuery(`INSERT into login(username,Email,password) values('${username}','${email}','${password}')`,function(er,res){
                res.send("Accesso effettuato")
    });
    console.log(rows)
}
})
// AGGIUNTA DI UN LIBRO
app.post("/registrazione-libro", function(request,result,next){
    const isbn= request.body.isbn
    const titolo= request.body.titolo
    const NomeAutore= request.body.NomeAutore
    const CognomeAutore= request.body.CognomeAutore
    const Genere= request.body.Genere
    const Lingua= request.body.Lingua
    const PosizioneInLibreria= request.body.PosizioneInLibreria

    const rows = executeQuery("SELECT * from login ");
    if (isbn.length != 13){
        result.send("Il codice ISBN inserito è sbagliato!") 
    }
    else{
     executeQuery(`INSERT into libri(isbn,Titolo,NomeAutore,CognomeAutore,Genere,Lingua,PosizioneInLibreria) values('${isbn}','${titolo}','${NomeAutore}','${CognomeAutore}','${Genere}','${Lingua}','${PosizioneInLibreria}')`,function(er,res){
     result.send("Libro registrato")    
    })
}})


app.listen(23456);