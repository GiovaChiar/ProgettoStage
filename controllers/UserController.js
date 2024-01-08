const db = require('../models')

// create main models

const User= db.USER
const jwt = require('jsonwebtoken');


//main works 

const Op = require('sequelize').Op;


// REGISTRAZIONE DI UN USER CON CONTROLLO PER VERIFICARE SE L'EMAIL E L'USERNAME SONO PRESENTI NEL DATABASE
const addUser = async (req, res) => {
    try {
        // Verifico che almeno uno tra username e email sia presente
        if (!req.body.Username && !req.body.Email) {
            return res.status(400).json({message:"You must enter at least one between username and email."});
        }
        
        // Verifico l'esistenza del username e dell'email
        const usernameExists = await User.findOne({
            where: {
                Username: {
                    [Op.like]: req.body.Username,
                }
            }
        });
        const emailExists = await User.findOne({
            where: {
                Email: {
                    [Op.like]: req.body.Email,
                }
            }
        });
        
        if (usernameExists || emailExists) {
            return res.status(400).json({message:"Username or Email already exists"});
        }
        
        // HASHING OF PASSWORD
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.Password, salt);
        
        // CREAZIONE DELL'UTENTE
        const info = {
            Username: req.body.Username,
            Email: req.body.Email,
            Password: hashedPassword,
            NameUser: req.body.NameUser,
            SurnameUser: req.body.SurnameUser,
        };
        
        const user = await User.create(info);
        res.status(200).send(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Internal Server Error'});
    }
}

// GENERAZIONE DI UN TOKEN JWT PER LA PASSWORD
  const generateToken = (user) => {
    const payload = {
    password: user.password
    };

    const token = jwt.sign(payload, 'your_secret_key');
    return token;
    };

  const login = async (req, res) => {
    try {
    const user = await User.findOne({ where: { username: req.body.Username, email: req.body.Email, password: req.body.Password } });
    if (!user || user.Password !== req.body.Password) {
    throw new Error("Invalid credentials");
    }
    
    const token = generateToken(User);
    res.json({ message: "Login successful",idUser:user.idUser, token });
    } catch (error) {
    res.status(401).send(error.message);
    }
    };

// DELETE DI UN UTENTE TRAMITE ID
    const deleteUser= async (req,res)=>{
        const idUser= req.body.idUser
        await User.destroy({where: {idUser:req.body.idUser}})
        res.status(200).json({message:'Delete User successfully'})
    }

// update password Utenti
const bcrypt = require('bcryptjs');
const cambioPassword = async (req, res) => {
    const { Username, Email, Password } = req.body;

    try {
        // Cerca l'utente
        const user = await User.findOne({ where: { Username, Email } });

        if (!user) {
            throw new Error('User not found');
        }

        // Hash della password
        const salt = bcrypt.genSaltSync();
        if (!salt) {
            throw new Error("Error during the salt generation");
        }
        const hashPassword = bcrypt.hashSync(Password, salt);

        // Aggiorna la password dell'utente
        user.Password = hashPassword;
        await user.save();

        res.status(200).json({message:'Password updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
};


// get di tutti gli utenti
const getAllUser= async (req,res)=> {
    const user= await  User.findAll({

    })
    res.status(200).send(user)
}





module.exports= {
    addUser,
    login,
    getAllUser,
    cambioPassword,
    deleteUser
}