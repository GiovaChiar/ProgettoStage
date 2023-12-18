'use strict'
const express= require("express")
const app= express()
const flash= require("express-flash")
const session= require("express-session")
const executeQuery= require("./moduls/db")
const mariadb= require('mariadb')
const path = require('path');
const cors= require('cors')
const role= require('./RoleEnum/RoleEnum')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(cors())

app.use(express.json())   // uso di json
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
// AUTENTICAZIONE UTENTE
// POST DI REGISTRAZIONE DI UN UTENTE

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
            res.json({utente: "UTENTE REGISTRATO"});
        })
             }else if(Email == 0 && Username!= 0){
            res.json({emailVuota:"Campo email vuoto"});
        }
             else if(Email != 0 && Username== 0){
            res.json({UsernameVuota:"Campo username vuoto"});

        }else {
            res.json({emailEUsernameVuoti:"Email e Username esistenti"})
        }
        }) 
       })

//POST DI LOGIN UTENTE  
app.post('/login', (req, res)=> { 
    const sql= "SELECT * FROM utenti WHERE username = ? AND email= ? AND password = ? ";
    const values= [
        req.body.username,
        req.body.email,
        req.body.password
    ]
   executeQuery(sql, values, (err,data) => {
        if(err) return    res.json({login: "LOGIN FALLITO!"});

        return res.json({data: "Login effettuato"});
    })
    const token= jwt.sign({values:values.password},'secretkey',(err,token)=>{
        res.json({token});
        

})
})
      
// -----------------------------------------------------------SEZIONE RISERVATA ALL'ADMIN-----------------------------------------------------------------
const ruolo = role.Amministatore 

if(ruolo == role.Amministatore){

//DELETE CON PATH PARAM PER CANCELLARE UN UTENTE TRAMITE ID
  app.delete('/user/delete/:id', function(req,res,next){
        var id= req.params.id   
        var query= `DELETE FROM utenti WHERE id = "${id}"`
        executeQuery(query,function(error,data){
            if(error){
                throw err;
            }else{
                result.json({utente: "Utente cancellato"}) 
            }
                })
    })

// SEZIONE LIBRERIA
    
// AGGIUNTA DI UN LIBRO CON VERIFICA CHE L'ISBN NON SIA DIVERSO DA 13 DIMENSIONE EFFETTIVA DI UN CODICE ISBN
app.post("/registrazione-libro", function(request,result,next){
    
    const isbn= request.body.isbn
    const titolo= request.body.titolo
    const NomeAutore= request.body.NomeAutore
    const CognomeAutore= request.body.CognomeAutore
    const Genere= request.body.Genere
    const Lingua= request.body.Lingua
    const PosizioneInLibreria= request.body.PosizioneInLibreria
    const NumeroDiCopie= request.body.NumeroDiCopie

    const rows = executeQuery("SELECT * from libri ");
    
    if (isbn.length != 13){
        result.json({libro: "Il codice ISBN inserito è sbagliato!"}) 
    }
    else{
    executeQuery(`INSERT into libri(isbn,titolo,NomeAutore,CognomeAutore,Genere,Lingua,PosizioneInLibreria,NumeroDiCopie) values('${isbn}','${titolo}','${NomeAutore}','${CognomeAutore}','${Genere}','${Lingua}','${PosizioneInLibreria}','${NumeroDiCopie}')`).then(() => {
    result.json({libro: "Libro registrato"})
    })
}}) 

// GET RISERVATA ALL'ADMIN E AGLI UTENTI ANCHE NON REGISTRATI
if(ruolo!= role.Amministatore  || ruolo== role.Amministatore){
// GET PER L'INTERA L'ISTA DEI LIBRI
    app.get("/listaLibri", async(req, res) => {
    res.json(await executeQuery("SELECT * FROM libri"))
    })
    }
}

// ALGORITMO DI ORDINAMENTO DEI LIBRI CON ORDER BY
app.get("/ordinamentoLibri", function (request, result){
   const query= "SELECT * FROM libri ORDER BY NomeAutore";
   executeQuery(query, (err, rows)=>{
    if(err) throw err;
    result.log(rows)
})
});

app.post('/modificaPassword', async (req, res) => {
    const username= req.body.Username;
    const email= req.body.Email;
    const password= req.body.Password;

    try {
      // Verifica se l'utente esiste nel database
      const query = "SELECT * FROM utenti WHERE username = ? AND email = ?";
      const result = await executeQuery(query, [username, email]);

      if (result.length > 0) {
        // L'utente esiste, procedi con la modifica della password
        const updateQuery = "UPDATE utenti SET password = ? WHERE username = ?";
        await executeQuery(updateQuery, [password, username]);
        res.status(200).json({ message: 'Password modificata con successo' });
      } else {
        res.status(400).json({ message: 'Utente non trovato' });
      }
    } catch (error) {
        res.status(500).json({ message: 'Si è verificato un errore' });
    }
  });



app.listen(23456);  