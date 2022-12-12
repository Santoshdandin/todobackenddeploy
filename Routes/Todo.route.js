
const express = require("express")

const {TodoModel} = require("../Models/Todo.model")

const todoRouter = express.Router()

todoRouter.get("/", async (req,res)=>{
    try {
        const todos = await TodoModel.find(req.query)
        res.send(todos)
        
    } catch (error) {
        console.log("something wrong");
        console.log(error);
    }
})

todoRouter.post("/create", async(req,res)=>{
    try {

        const payload = req.body
        const todo = new TodoModel(payload)
        await todo.save()
        res.send("Todo created")
        
    } catch (error) {
        console.log(error);
        console.log("something wrong");
        
    }
})

todoRouter.patch("/edit/:ID", async (req,res)=>{
    const ID = req.params.ID
    const payload = req.body

    try {
          await TodoModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Updated")
    } catch (error) {

        console.log(error)
        console.log("something wrong");
        
    }
})

todoRouter.delete("/delete/:ID", async (req,res)=>{
    const ID = req.params.ID

    try {
        await TodoModel.findByIdAndDelete({_id:ID})
        res.send(`deleted`)
        
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }
})

module.exports = {todoRouter}