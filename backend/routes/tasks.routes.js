const express = require("express");
const { TaskModel } = require("../models/TaskModel");

const tasksRouter = express.Router();

tasksRouter.post("/", async (req, res) => {
    const taskData = req.body
    const task = new TaskModel({ ...taskData })
    task.save()
    res.send({
        msg: "task Created Successfully"
    })

})

tasksRouter.get("/", async (req, res) => {
    try {
        const tasks = await TaskModel.find({})
        res.send(tasks)
    } catch (error) {
        res.send({
            error: "Can't get tasks",
            msg: error.message
        })
    }
})


tasksRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
        await TaskModel.findByIdAndUpdate(id, updates)
        res.send({
            msg: "task Updated"
        })
    } catch (error) {
        res.send({
            error: "Can't Update tasks",
            msg: error.message
        })
    }

})

tasksRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await TaskModel.findByIdAndDelete(id)
        res.send({
            msg: "task Deleted"
        })
    } catch (error) {
        res.send({
            error: "Can't Delete task",
            msg: error.message
        })
    }

})

tasksRouter.delete("/clearcompleted", async (req, res) => {
    try {
        await TaskModel.deleteMany({ isCompleted: false })
        res.send({
            msg: "completed tasks deleted"
        })
    } catch (error) {
        res.send({
            error: "Can't Delete task",
            msg: error.message
        })
    }

})



module.exports = {
    tasksRouter
}
