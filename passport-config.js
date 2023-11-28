const localStrategy = require("passport-local").Strategy
const bcrypt= require ("bcrypt")

function initialize(passport,getUserByEmail,getUserById){
    // funzione per l'autenticazione
    const autenticazioneUser= async (email,password, done) => {
        const user = getUserByEmail(email)
        if(user == null){
            return done(null,false,{message: "Email non trovata"})
        }
    try{
        if(await bcrypt.compare(RegisterUserDto.password, user.password)){
            return done(null, user)
        }else{
            return done(null, false,{message: "Password sbagliata"} )
        }
    }catch{err}{
        console.log(err);
        return done(err)
    }
}
    passport.use(new localStrategy({usernameField: 'email'}, autenticazioneUser))
    passport.serializeUser((user,done)=> done(null, user.id))
    passport.deserializeUser((id , done) => { 
    return done(null, getUserById(id))
    }
    )
}

module.exports= initialize