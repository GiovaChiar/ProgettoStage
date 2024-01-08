const UsersController= require('../controllers/UserController.js')
const BooksController= require('../controllers/BooksController.js')
const BookUserController= require("../controllers/BookUserController.js")

const router= require('express').Router()


// Route for User
router.post("/addUser", UsersController.addUser)
router.post("/login", UsersController.login)
router.delete("/deleteUser", UsersController.deleteUser)
router.put("/cambioPassword", UsersController.cambioPassword)

router.get("/getAllUser", UsersController.getAllUser)

// Route for books
router.post("/addBook",BooksController.addBook)
router.get("/getAllBooks", BooksController.getAllBooks)
router.delete("/deleteBook", BooksController.deleteBooks)


//router.post("/aggiuntaPrestito",BookUserController.bookUser )
router.post("/addLoan",BookUserController.addLoan)
router.get('/getLoan',BookUserController.getLoan);
router.delete("/deleteLoan", BookUserController.deleteLoan);



module.exports= router