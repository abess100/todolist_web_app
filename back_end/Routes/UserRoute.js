const express = require('express')
const router = express.Router()
const User = require('../Models/UserModel')
const { register, login, logout , forget} = require('../Controller/authController')
const {getId, putUser, deleteUser, updatepassword, updatePicture} = require('../Controller/userController')


// authentification user
router.post('/login', login )
router.post('/register', register )
router.get('/logout', logout )
router.post('/forget',  forget)



// route utilisateur 
router.get("/:id", getId)
router.put("/:id", putUser);
router.delete("/:id", deleteUser);


// route pour update le mot de passe 
router.put("/password/:id", updatepassword);

// route pour modifier la photo de profil
router.put("/picture/:id", updatePicture);



module.exports = router