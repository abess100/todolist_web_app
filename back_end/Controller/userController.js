const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");


const getId = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await User.findById(id);
        if(!user) { 
           return res.json({"message": "user not found"});
        }
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
}
const putUser =  async (req, res) => {
    const { id } = req.params;
    const {name, email, pseudo} = req.body;
    
    try{
        const user = await User.findById(id);
        if(!user) { 
           return res.json({"message": "user not found"});
        }
        
        const updateUser = await User.findOneAndUpdate(
            {_id:id},
            {
                $set : {
                    name,
                    email,
                    pseudo
                }
            },
            {new: true}
        );

        if(!updateUser) {
            return res.status(400).json({message: "user not found"});
        }

        res.status(200).json(updateUser);
    } catch(err){
        res.status(500).json(err);
    }  
}

const deleteUser = async (req,res) => {
    const {id} = req.params;
    try{
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json(deleteUser);
        if(!deleteUser) {
            return res.status(400).json({message: "user not found"});
        }
    } catch(error){
        res.status(500).json(error);
    }
}


const updatepassword = async (req, res) => {
    const {id} = req.params;
    try{

        const user = await User.findById(id);
        if(!user) { 
           return res.json({"message": "user not found"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const updatepassword = await User.findOneAndUpdate(
            {_id:id},
           {
               $set : {
                   password: hashedPassword
               }
           },
           {new: true}
       );
       if(!updatepassword) {
           return res.status(400).json({message: "user not found"});
       }
       res.status(200).json(updatepassword);
    } catch(error){
        res.status(500).json(error);
    }  
}

// update picture 
const updatePicture = async (req, res) => {
    const {id} = req.params;
    const {picture} = req.body;
    try{
        const updateUser = await User.findOneAndUpdate(
            id,
           {
               $set : {
                   picture
               }
           },
           {new: true}
       );
       res.status(200).json(updateUser);
    } catch(error){
        res.status(500).json(error);
    }  
}


module.exports = {getId, putUser, deleteUser, updatepassword, updatePicture}