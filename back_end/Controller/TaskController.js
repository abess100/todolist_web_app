const Task = require("../Models/TaskModel");

const getTask = async (req, res) => {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
};

const getTaskId= async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if(!task){
        return res.status(404).json({message: " Task not found"})
    } else {
        res.status(200).json(task);
        
    }
    
};

const postTask = async (req, res) => {
    const { title, description,status, priority} = req.body;
    if(!req.file) return res.status(400).json({message: "Please select an image"});
    const newTask = new Task({
        title,
        description,
        status,
        file: '/taskImg/' + req.file.filename,
        priority,
    
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
    console.log(newTask);

};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority,file } = req.body;
    try {
        const task = await Task.findById(id);
        if (!task) {
            res.status( 404).json({ message: "Task not found" });
        }

        if (!req.file) {
            // return res.status(400).json({ message: "Please select an image" });
            console.log(req.body);

        }

        const updateTask = await Task.findByIdAndUpdate(
            { _id: id },
            {
                $set:  {
                    title,
                    description,
                    file: '/taskImg/' + req.file.filename,
                    status,
                    priority,
                }
            },
            { new: true }
        );

        if (!updateTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }

};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }

        const deleteTask = await Task.findByIdAndDelete(id);
        res.status(200).json(deleteTask );

        if (!deleteTask) {
            return res.status(400).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { getTask, postTask, updateTask, deleteTask, getTaskId };
