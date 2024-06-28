const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    file: {
        type: String,
    },
    status: {
        type: String,
    },
    priority: {
        type:String,
    },
    // auteur:{
    //     type: String,  
    // }
    // id: {
    //     type: mongoose.Types.ObjectId
    // }
},
{timestamps: true});
module.exports = mongoose.model('task', taskSchema)