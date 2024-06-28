const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Priority = require('../Models/PriorityModel');

router.get("/", async (req, res) => {
    try {
        const priority = await Priority.find();
        if(!priority.length < 0) {
            return res.status(400).json({message: "status not found"}); 
        }
        res.status(200).json(priority);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const {name} = req.body;

    try {
       const newPriority = new Priority({name});
       const savedPriority = await newPriority.save();
       res.status(200).json(savedPriority);
    } catch (error) {
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const name= req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No status with id: ${id}`);
    const updatedPriority = await Priority.findByIdAndUpdate(id, name, { new: true });
    if(!updatedPriority) {
        return res.status(400).json({message: "status not found"}); 
    }
    res.json(updatedPriority);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No status with id: ${id}`);
    const deletPriority = await Priority.findByIdAndDelete(id);
    res.json({ message: "status deleted successfully." });
});


module.exports = router