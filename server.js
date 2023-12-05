'use strict'
if (process.env.NODE_ENV!== "production"){
    require("dotenv").config()
}
const express= require("express")
const app= express()
const flash= require("express-flash")
const session= require("express-session")
const executeQuery= require("C:/Users/pmateria/Desktop/ProgettoStage/moduls/db.js")
const middleware= require("C:/Users/pmateria/Desktop/ProgettoStage/moduls/middleware.js")
const cors= require('cors')

app.use(express.json())   // uso di json
app.use(express.urlencoded({extended: true}))

// Post registrazione utente in tabella utenti. Il json richiede come paramtri Username,Email,Password,Nome,Cognome li acquisisce e li invia al database 
app.post("/registrazione", async function (req, res, next){
    const Username= req.body.Username
    const Email= req.body.Email
    const Password= req.body.Password
    const Cognome= req.body.Cognome
    const Nome= req.body.Nome
    const rows = await executeQuery("SELECT * from utenti");
    if(res.length>0){
        res.send("La mail inserita è esistente!");
    }else {
        executeQuery(`INSERT into utenti(Username,Email,Password,Cognome,Nome) values('${Username}','${Email}','${Password}','${Cognome}','${Nome}')`,function(er,res){
        res.send("Utente registrato con successo")
    });
    console.log(rows)
    }})

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

// Post login utente in tabella utenti. Il json richiede come paramtri Username,Email,Password li acquisisce e li invia al database tramite query Insert 
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
app.listen(23456);