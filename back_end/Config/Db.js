const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/task_manager")
.then(() => {
    console.log('database connect');
})
.catch ((err) => {
    console.log(err);
})
