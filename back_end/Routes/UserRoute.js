const express = require('express')
const router = express.Router()
const { register, login, logout , forget} = require('../Controller/authController')
const {putUser, deleteUser, updatepassword, updatePicture} = require('../Controller/userController')
// authentification user
router.post('/login', login )
router.post('/register', register )
// router.post ('/forgetpass', forget)

// route utilisateur 
router.put("/:id", putUser);
router.delete("/:id", deleteUser);


// route pour update le mot de passe 
router.put("/password/:id", updatepassword);

// route pour modifier la photo de profil
router.put("/picture/:id", updatePicture);



module.exports = router