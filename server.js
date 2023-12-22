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

app.use(cors())


app.use(express.json())   // uso di json
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
     }});
  
// AUTENTICAZIONE UTENTE
// ROUTH DI REGISTRAZIONE DI UN UTENTE
app.post("/registrazione", async function (req, res, next) {
    try {
    const Username= req.body.Username;
    const Email= req.body.Email;
    const Password= req.body.Password;
    const Cognome= req.body.Cognome;
    const Nome= req.body.Nome;

    const selectQuery = "SELECT * FROM utenti WHERE Email= ?";
    const insertQuery = "INSERT INTO utenti(Username,Email,Password,Cognome,Nome) VALUES (?, ?, ?, ?, ?)";

    const emailRows = await executeQuery(selectQuery, [Email]);

    if(emailRows.length == 0) {
         if(Password != "") {
         await executeQuery(insertQuery, [Username, Email, Password, Cognome, Nome]);
         res.json({message: "UTENTE REGISTRATO"});
         } else {
            res.json({message: "Campo password vuoto"});
        }
     } 
    else if (Email == "") {
        res.json({message: "Campo email vuoto"});
    } else if (Username == "") {
         res.json({message: "Campo username vuoto"});
     } else {
         res.json({message: "Email e Username esistenti"});
      } 
     } catch (error) {
        console.log(error);
        res.status(500).json({message: "Errore del server"});
    }
})

//POST DI LOGIN UTENTE  
// Route per effettuare la login
app.post('/login', (req, res) => {
    const { username, password, email } = req.body;
    // Verifica se tutti i campi sono presenti
    if (username || password && email) {
      // Cerca l'utente nella tabella
      const utente = "SELECT * FROM utenti WHERE username=? AND password=? AND email=?"
  
      if (utente) {
        // Genera un token JWT
        const token = jwt.sign({ password: utente.password }, 'chiaveSegretaDelToken');
  
        res.json({ token }); // Invia il token al client
      } else {
        res.status(401).json({ message: 'Credenziali non valide' }); // Credenziali non valide
      }
    } else {
      res.status(400).json({ message: 'Devi fornire username, password ed email' }); // Campi mancanti
    }
  });
      
// -----------------------------------------------------------SEZIONE RISERVATA ALL'ADMIN-----------------------------------------------------------------
const ruolo = role.Amministatore 

if(ruolo == role.Amministatore){

//DELETE CON PATH PARAM PER CANCELLARE UN UTENTE TRAMITE ID
  app.delete('/user/delete/:id', function(req,res,next){
    
    const id= req.params.id   
    const query= `DELETE FROM utenti WHERE id = "${id}"`
        executeQuery(query,function(error,data){
            if(error){
                throw err;
            }else{
                result.json({message: "Utente cancellato"}) 
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

    const rows = executeQuery("SELECT * FROM libri WHERE isbn = ?", [isbn]);
    
    if (isbn.length != 13){
    result.json({message: "Il codice ISBN inserito è sbagliato!"}) 
    }
    else{
    executeQuery(`INSERT into libri(isbn,titolo,NomeAutore,CognomeAutore,Genere,Lingua,PosizioneInLibreria,NumeroDiCopie) VALUES(?,?,?,?,?,?,?,?)`, [isbn, titolo, NomeAutore, CognomeAutore, Genere, Lingua, PosizioneInLibreria, NumeroDiCopie]).then(() => {
        result.json({message: "Libro registrato"})
    })
}
})

// AREA RISERVATA ALL'ADMIN E AGLI UTENTI ANCHE NON REGISTRATI
if(ruolo!= role.Amministatore  || ruolo== role.Amministatore){

// GET PER L'INTERA L'ISTA DEI LIBRI
app.get("/listaLibri", async (req, res) => {
    const query = "SELECT * FROM libri";
    const result = await executeQuery(query);
    res.json({message: "Libro registrato", result})
});
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

//DELETE TRAMITE ISBN DIMINUENDO IL NUMERO DI COPIE DA DEDICEDERE SE CANCELLARE DEFINITIVAMENTE IL RECORD O SEMPLICEMENTE IMPOSTARLO A 0.
app.delete('/deleteLibri', async (req, res) => {
    const ISBN = req.body.ISBN
    async function countBookCopies(ISBN) {
        const result = await executeQuery('SELECT COUNT(*) AS count FROM libri WHERE ISBN = ?', [ISBN]);
        return result[0].count;
    }
    const numeroDiCopie = await countBookCopies(ISBN);
    if (numeroDiCopie > 0) {
        try {
            await executeQuery('UPDATE libri SET numeroDiCopie = numeroDiCopie - 1 WHERE ISBN = ?;', [ISBN]);
            const updatedNumeroDiCopie = await executeQuery('SELECT numeroDiCopie FROM libri WHERE ISBN = ?;', [ISBN]);
            await executeQuery('UPDATE libri SET numeroDiCopie = 0 WHERE numeroDiCopie < 0 AND ISBN = ?;', [ISBN]); // Aggiunta condizione per impostare a 0 se inferiore a 0
            res.send({ message: `Libro con ISBN ${ISBN} cancellato correttamente.Rimangono ancora: 0 copie` });
        } catch (err) {
            console.error('Errore di eliminazione', err);
            return res.status(500).send({ error: `Si è verificato un errore durante l'eliminazione del libro con codice ISBN ${ISBN}: ${err.message}` });
        }
    } else {
        res.send({ message: `Libro con ${ISBN} non trovato` });
    }
});

  // MODIFICA DELLA PASSWORD DELL'UTENTE
app.put('/modificaPassword', async (req, res) => {
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

//ROUTH DI GESTIONE DEI PRESTITI CON RELAZIONE MOLTI A MOLTI 

// Endpoint per aggiungere un prestito  
app.post('/AggiuntaPrestiti', async (req, res) => {
    const { ISBN, idUtenti } = req.body;
    try {
      const result = await executeQuery('INSERT INTO utentiLibri (idUtenti, ISBN) VALUES (?, ?)', [idUtenti, ISBN]);
      res.send('Prestito aggiunto con successo');
    } catch (err) {
      console.error(err);
      res.status(500).send('Errore durante l aggiunta del prestito');
    }
  });

  //Route di una lista di libri associati ad un untente 
  app.get('/libri/:isbn/idUtenti/:id', (req, res) => {
    const { isbn, id } = req.params;
    // Definiamo la query MySQL
    const query = 'SELECT * FROM utentiLibri WHERE isbn = ? AND idUtenti LIKE ? ';
    // Insertiamo i parametri dinamicamente
    const values = [isbn, `%${id}%`];
    // Chiamiamo la funzione executeQuery con la nuova query ed i parametri appena definiti
    executeQuery(query, values)
      .then((results) => {
        // Se tutto va bene, inviamo il risultato alla risposta
        res.json(results);
      })
      .catch((error) => {
        // Se si verifica un errore, segnaliamo lo stack trace
        console.error('Error in executeQuery:', error.stack);
      });
  });

app.listen(23456);
