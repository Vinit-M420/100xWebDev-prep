const express = require('express');
const app = express();
const { TodoModel } = require("../db/index");
const { auth } = require("../middleware/user");
const { z } = require("zod");
let idCounter = 1;
// const jwt = require("jsonwebtoken");
// require('dotenv').config()

app.use(express.json());
app.use(auth);

app.post("/", async function (req,res) {
    const requiredTodo = z.object({
        todoId: z.number(),
        title: z.string().min(3).max(20),
        done: z.boolean()
    })

    const parsedDatawithSuccess = requiredTodo.safeParse(req.body);

    if (!parsedDatawithSuccess.success){
        res.json({ 
            message: "Invalid format to the todo",
            error: parsedDatawithSuccess.error
    })}

    const userId = req.userId;
    let todoId = idCounter++;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        todoId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});

app.get("/", async function(req,res) {
    const userId = req.userId;
    const user = await TodoModel.find({ userId });
    res.json({ user }) // Gets all the todo of the found user 
});

app.delete("/:id", async function(req,res) {
    const todoToDelete = parseInt(req.params.id);
    const userId = req.userId;
    const user = await TodoModel.find({ userId });
    const todo = await user.find(u => u.todoId === todoToDelete);
    user.delete(todo);
})

app.put("/:id", async function(req,res) {
    const { id } = req.params; 
    
});


module.exports = app;
