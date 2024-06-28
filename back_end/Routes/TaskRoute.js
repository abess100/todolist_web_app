const express = require('express');
const router = express.Router();
const {getTask,getTaskId, postTask, updateTask, deleteTask} = require('../Controller/TaskController')
const upload = require('../Controller/uploadTask')

router.get("/", getTask);
router.get('/:id', getTaskId );
router.post("/", upload.single("file") ,postTask);
router.put("/:id",upload.single("file") , updateTask);
router.delete("/:id", deleteTask);


module.exports = router