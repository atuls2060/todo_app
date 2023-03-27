const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    value: String,
    isCompleted: Boolean,
})

const TaskModel = mongoose.model("Tasks", TaskSchema)


module.exports = {
    TaskModel
}