if (process.env.NODE_ENV!== "production"){
    require("dotenv").config()
}

const express= require("express")
const app= express()
const bcrypt= require("bcrypt")
const passport= require("passport")
const initializePasspoort= require("./passport-config")
const flash= require("express-flash")
const session= require("express-session")
const bodyParser= require("body-parser")
const methodOvveride= require("method-override")
const path = require('path');
const cors = require('cors');

initializePasspoort(
    passport,
    email=> users.find(user=>user.email=== email),
    id => user.find(user=>user.id=== id)
)

const users= []

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors)
app.use(flash())
app.use(session({
    name : 'codeil',
    secret : 'something',
    resave :true,
    saveUninitialized: true,
    cookie : {
    maxAge:(1000 * 60 * 100)
    }      
}));

app.use(passport.initialize())
app.use(methodOvveride("_method"))
app.post("login", checkNotAuthenticated , passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

app.post("/register",checkNotAuthenticated, async(req,res)=>{
     try{
        const hashedPassword= await hash(RegisterUserDto)
            users.push({
            id: Date.now().toString(),
            name: RegisterUserDto.name,
            email: RegisterUserDto.email,
            password:hashedPassword,
        })
        console.log(users);
        res.redirect("/login ")

     }catch {
        res.redirect("/register")
     }
     console.log(users);
})

app.delete("/logout", (res, req)=>{
    req.logOut(req.user,err=> {
        if(err) return next(err)
        res.redirect("/")
    })
    res.redirect("/login")
})


//Routes
app.get('/',checkAuthenticated, async (req, res) => {
    res.render("index.ejs")
});
 
app.get('login',checkNotAuthenticated, async (req, res) => {
    res.render("login.ejs")
});

app.get('/register',checkNotAuthenticated, async (req, res) => {
    res.render("register.ejs")
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

console.log("Start server on 1234")
app.listen(1234);