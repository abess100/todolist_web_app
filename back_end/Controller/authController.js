const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt  = require('jsonwebtoken');



  const   register = async (req, res) => {
        const {name, pseudo, email, password} = req.body;
        console.log(req.body);
            
        if(!name  || !email || !password) {
            return res.status(400).json({message: "Veuillez remplir tous les champs"});
        }
        const emailExist = await User.findOne({email: email});
        if(emailExist) {
            return res.status(400).json({message: "Cet email est déjà utilisé"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            pseudo,
            name,
            email,
            password: hashedPassword,
        });
        try {
            const user = await newUser.save();
            res.status(200).json(user);         
        } catch (error) {
            res.status(500).json(error);
        }    
    }  

    const login = async (req, res) => {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "Veuillez remplir tous les champs"});
        }
            try{

                const user =  await  User.findOne({email:email}).select("-password");

                if(!user) {
                     return  res.status(400).json({message: "Cet email n'existe pas"});
                }
                const validPassword = await bcrypt.compare(password, user.password);
                if(!validPassword) {
                    return  res.status(400).json({message: "Mot de passe ne correspond pas avec le mail"});
                }
               
                
                // je dois installé cookie parser
                const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '24h'});
                res.cookie('token',token, {httpOnly:true}, {maxAge: 360})
               return  res.status(200).json({user,token});
            } catch(err) {
                res.status(500).json('erreur : ' + err)
            }

    }

    const logout = async( req,res) => {
        res.cookie('token', '', {mawAge:1})
    }

    const forget = async (req,res) => {
            const {email} = req.body
            try{
                const user = await User.findOne({email})
                if(!email){
                    return res.json({message: "email incorrect "})
                }


            } catch(err){
                console.log(err);
            }
    }

module.exports = { register, login, logout ,forget}