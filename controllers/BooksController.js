const db = require('../models')

// create main models

const Books= db.Books

//main works 

const Op = require('sequelize').Op;

const addBook = async (req, res) => {
    const info = {
      ISBN: req.body.ISBN,
      Title: req.body.Title,
      NameWriter: req.body.NameWriter,
      SurnameWriter: req.body.SurnameWriter,
      Type: req.body.Type,
      Language: req.body.Language,
      LocationInLibrary: req.body.LocationInLibrary,
      NumberOfCopies: req.body.NumberOfCopies,
    };
  
    // Verifica se la lunghezza dell'ISBN è 13
    if (info.ISBN.length !== 13) {
      return res.status(400).json({message:"The ISBN code is mandatory and must contain 13 characters."});
    }
  
    // Controlla se l'ISBN è già presente
    const countISBN = await Books.count({ where: { ISBN: info.ISBN } });

    if (countISBN > 0) {
      // Incrementa il numero di copie del libro esistente
      await Books.increment('NumberOfCopies', { where: { ISBN: info.ISBN } });
      return res.status(200).json({message:"Book updated!"});
    }
  
    // Aggiunge un nuovo libro
    const books = await Books.create(info);
    res.status(200).json({message:"Book Registered!"});
  }

// Tutta la lista dei libri 
const getAllBooks= async (req,res)=> {
    const books= await  Books.findAll({
    })
    res.status(200).json(books)
}

// DELETE TRAMITE ISBN DIMINUENDO IL NUMERO DI COPIE (DA DECIDERE SE CANCELLARE DOPO TUTTO IL RECORD O SETTARLO A 0)
const deleteBooks = async (req, res) => {
    const ISBN = req.params.ISBN;
    
    try {
        const book = await Books.findOne({ where: { ISBN: ISBN } });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        if (book.NumberOfCopies > 1) {
            book.NumberOfCopies--;
            await book.save();
            return res.status(200).json({ message: "Book deleted successfully" });
        } else {
            await book.destroy();
            return res.status(200).json({ message: "Book deleted" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    };  

module.exports= {
    addBook,
    getAllBooks,
    deleteBooks
}