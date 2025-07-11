const express = require('express');
const router = express.Router();
const { TodoModel } = require("../db/index");
const { auth } = require("../middleware/user");
const { z } = require("zod");


router.use(express.json());
router.use(auth);

router.post("/", async function (req,res) {
    const requiredTodo = z.object({
        title: z.string().min(3).max(20)
        //done: z.boolean()
    })

    const parsedDatawithSuccess = requiredTodo.safeParse(req.body);

    if (!parsedDatawithSuccess.success){
        res.status(403).json({ 
            message: "Invalid format to the todo",
            error: parsedDatawithSuccess.error
    })}

    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});

    router.get("/", async function(req,res) {
        const userId = req.userId;
        try {
            const todos = await TodoModel.find({ userId: userId });
            res.json({ todos }) // Gets all the todo of the found user 
        }
        catch(error){
            res.status(500).json({
                msg: "Error fetching todos",
                error: error.message,
            });
        }
        
    });


router.delete("/:id", async function(req,res) {
    const deleteId = req.params.id;
    const userId = req.userId;
    

    try{
        const todo = await TodoModel.findOne({ _id: deleteId, userId: userId });
        if (!todo){
            return res.status(400).json({ 
                message: "Todo not found or you don't have permission to delete" 
            });
        }
        await TodoModel.deleteOne( { _id: deleteId });
        res.json({ message: "Deleted the todo" })

    } catch(err){
        res.status(400).json({
            message: "Error in deleting an todo",
            error: err.message
        });
    }

});

router.put("/:id/done", async function(req,res) {
    const { id } = req.params;
    const userId = req.userId;
    const { done } = req.body;

    if (typeof done !== 'boolean') {
        return res.status(400).json({
            message: "You must provide a done status.",
        });
    }

    try {
        const result = await TodoModel.updateOne(
            { _id: id },
            { done: done }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json({
            msg: "Todo marked.",
        });
    }
    catch(error){
        res.status(400).json({ 
            message: "Error in updating the todo done status", 
            error: error.message 
        });
    }
   
});


router.put("/:id/title", async function(req,res) {
    const { id } = req.params;
    const userId = req.userId;
    const { title } = req.body;

    if (typeof title !== 'string' || !title || title.trim().length === 0) {
        return res.status(400).json({
            message: "Title for the todo is required",
        });
    }

    try {
        const result = await TodoModel.updateOne(
            { _id: id },
            { title: title.trim() }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json({
            msg: "Todo title successfully updated.",
        });
    }
    catch(error){
        res.status(400).json({ 
            message: "Error in updating the todo title", 
            error: error.message 
        });
    }
});


module.exports = router;
