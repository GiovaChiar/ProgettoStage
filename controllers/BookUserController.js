
// CONTROLLER TABELLA INTERMEDIA BOOKUSER
const { Sequelize } = require('sequelize');
const  Users   = require('../models/user');
const  Books  = require('../models/books');
const  {BookUser} = require('../models/BookUser');


const addLoan = async (req, res) => {
    try {
        const { userIdUser, BookISBN } = req.body;

        const foundUser = await Users.findByPk(userIdUser, {
            include: {
                model: Users,
                required: true,
                where: { idUser: userIdUser },
                through: BookUser,
            },
        });

        const foundBook = await Books.findByPk(BookISBN, {
            include: {
                model: Books,
                required: true,
                where: { ISBN: BookISBN },
                through: BookUser,
            },
        });

        if (!foundUser || !foundBook) {
            return res.status(404).json({ message: 'User or book not found'});
        }

        // Aggiungi il libro all'utente attraverso la tabella intermedia BookUser
        await BookUser.create({ userIdUser: foundUser.idUser, BookISBN: foundBook.ISBN });

        return res.status(201).json({ message: 'Loan successfully added.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error while adding the loan' });
    }
};

const getLoan = async (req, res) => { 
  const { userIdUser } = req.body;
  try {
    const loans = await BookUser.findAll({
      where: { userIdUser: userIdUser},
      include: [{
          model: Books,
          where: { ISBN: Sequelize.col('BookUser.BookISBN') }
        }]
    });

    if (loans.length === 0) {
      res.status(404).json({ error: 'No loans found for this user' });
      return;
    }

    res.json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

    const deleteLoan = async (req, res) => {
        const idBookUser = req.body.idBookUser;

        try {
          // Cerca il prestito con l'id specificato
          const LoanToBeCancelled = await BookUser.findByPk(idBookUser);
      
          if (!LoanToBeCancelled) {
            return res.status(404).send('Loan not found!');
          }
      
          // Elimina il prestito
          await LoanToBeCancelled.destroy();
      
          res.send('Loan successfully deleted');
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal server error');
        }
      };
    

module.exports = { addLoan,getLoan,deleteLoan};