const UsersController= require('../controllers/UserController.js')
const BooksController= require('../controllers/BooksController.js')
const BookUserController= require("../controllers/BookUserController.js")

const router= require('express').Router()


// Route for User
router.post("/registration", UsersController.addUser)
router.post("/login", UsersController.login)
router.put("/changePassword", UsersController.cambioPassword)
router.get("/UserList", UsersController.getAllUser)
router.delete("/deleteUser/:idUser", UsersController.deleteUser)

// Route for books
router.post("/registrationBook",BooksController.addBook)
router.get("/BookList", BooksController.getAllBooks)
router.delete("/deleteBook/:ISBN", BooksController.deleteBooks)

//Route for many2many (user-books)
router.post("/addLoan",BookUserController.addLoan)
router.get('/LoanList/:userIdUser',BookUserController.getLoan);
router.delete("/deleteLoan/:BookISBN/:userIdUser", BookUserController.deleteLoan);


module.exports= router