const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');


const checkUser = async (req, res, next) =>{
    try {
        const token = req.cookies.token
        if(token){
            jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodeToken) => {
                if(err){
        
                    res.locals.user = null;
                    res.cookies('token', ' ', {maxAge:1});
        
                }else{
        
                    console.log(decodeToken);
                    let user = await UserModel.findById(decodeToken.id);
                    res.locals.user = user;
                    console.log(res.locals.user);
                    next();
        
                }
            })
        } else {
            res.locals.user = null;
            next();
        }
            
    
    } catch (err) {
        return res.json(err)
    }

}


const Authentify = async (req, res, next) => {
    const token = req.cookies.token;
    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodeToken) => {
            if(err){
                console.log(err);
            } else {
                // console.log(decodeToken.id);
                next();
            }
        })
    } else {
       console.log('pas de token') 
    }
}

const verify = async (req,res) => {
    try{
        const token = req.cookie.token;
        if(!token){
            return res.json('no token')
        }
        const decoded = await jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(decoded);
        next()
    }  catch(err){
        res.json(err)
    }

}

module.exports = {checkUser, Authentify, verify}

// const authenticateToken = function authenticateToken(req, res, next) {
//     // récupére le token depuis le header
//     const token = req.header('x-auth-token');
     
//     // Vérifie si le token est disponible
//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized not exist' });
//     }
//     try {
//         // Vérifie et décoder le token
//         const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Unauthorized failed' });
//     }
// }

// module.exports = authenticateToken