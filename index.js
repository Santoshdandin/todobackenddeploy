const express = require("express")


const {config} = require("./Config/config")

const { todoRouter } = require("./Routes/Todo.route")

require('dotenv').config()

const app = express()

app.use(express.json())

app.use("/todos", todoRouter)


app.listen(7860, async()=>{

    try {
        await config;
        console.log("Connected Successfully");
    } catch (error) {
        console.log("Connection  failed");
        console.log(error);
    }
})