const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Status = require('../Models/StatutModel');

router.get("/", async (req, res) => {
    try {
        const status = await Status.find();
        if(!status.length < 0) {
            return res.status(400).json({message: "status not found"}); 
        }
        res.status(200).json(status);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const {name} = req.body;

    try {
       const newStatus = new Status({name});
       const savedStatus = await newStatus.save();
       res.status(200).json(savedStatus);
    } catch (error) {
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const status = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No status with id: ${id}`);
    const updatedStatus = await Status.findByIdAndUpdate(id, status, { new: true });
    if(!updatedStatus) {
        return res.status(400).json({message: "status not found"}); 
    }
    res.json(updatedStatus);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No status with id: ${id}`);
    const deletstatus = await Status.findByIdAndDelete(id);
    res.json({ message: "status deleted successfully." });
});


module.exports = router