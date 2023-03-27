const express = require("express");
require("dotenv").config();
const cors = require("cors")
const { tasksRouter } = require("./routes/tasks.routes");
const { connection } = require("./utils/db");

const app = express();
app.use(express.json())
app.use(cors())

app.use("/tasks", tasksRouter)

const PORT = process.env.PORT

app.listen(PORT, async () => {
    try {
        await connection()
        console.log("Connected to db")
    } catch (error) {
        console.log("error", error.message)
    }
    console.log(`server running on port ${PORT}`)
})