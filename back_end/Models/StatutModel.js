const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    name: String,
},
{timestamps: true});
module.exports = mongoose.model('status', statusSchema)