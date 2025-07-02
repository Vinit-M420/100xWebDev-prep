const express = require('express');
const app = express();
const fs = require('fs');

let todos = [];
let idCounter = 1;

fs.writeFile('todo-data.json', '[]', 'utf-8', (err) => {
    if (err) console.error('Init error:', err);
    else console.log('Initialized todo-data.json');
});

app.use(express.json());

app.get('/', function (req, res) {
    fs.readFile('todo-data.json', 'utf-8', function(err, data) {
        if (err) {
            return res.status(400).json({ error: "Error in fetching todos" });
        } else {
            try {
                const todos = JSON.parse(data); // convert string → object
                return res.json(todos);         // send JSON to client
            } 
            catch (parseErr) {
                return res.status(500).json({ error: "Corrupted JSON data" });
            }
        }
    });
});

app.post('/create', function(req, res) {
    const todoText = req.body.todo;
    if (!todoText) {
        return res.status(400).json({ error: 'Missing todo' });}
    let newTodo = {
        id: idCounter++,
        todo: todoText
    }

    todos.push(newTodo);

    fs.writeFile('todo-data.json', JSON.stringify(todos, null, 2), 'utf-8', (err) => {
        if (err) {
            //console.error('Error saving todos:', err);
            return res.status(500).json({ error: 'Failed to save todo' });
        }
        res.status(200).json({ message: 'Todo added' });
    });
});

app.delete('/deleteall', function(req,res){
    todos = [];

    fs.writeFile('todo-data.json', '[]', 'utf-8', (err) => {
    if (err) console.error('Deletion error:', err);
    else {
        res.json({msg: 'Deleted all todos'})
        console.log('Cleared todo-data.json');
    }
    });
    
    idCounter = 1;
});



app.delete('/delete/:id',  function(req,res){
    const id = parseInt(req.params.id); 
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo with given ID not found' });
    }

    const removed = todos.splice(index, 1); 

    fs.writeFile('todo-data.json', JSON.stringify(todos, null, 2), 'utf-8', (err) => {
        if (err) {
            //console.error('Error saving todos:', err);
            return res.status(500).json({ error: 'Failed to delete todo' });
        }
        res.status(200).json({ message: 'Todo Deleted'  });
    });

});

app.put('/update/:id', function(req,res) {
    const id = parseInt(req.params.id);
    const newtodotext = req.body.todo;

    if (!newtodotext || newtodotext === '') {
        return res.status(400).json({ error: 'Missing todo in request body' });
    }

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo with given ID not found' });
    }

    // Update the todo text
    todo.todo = newtodotext;

    fs.writeFile('todo-data.json', JSON.stringify(todos, null, 2), 'utf-8', err => {
        if (err) return res.status(500).json({ error: 'Write failed' });

        else res.status(200).json({ message: 'Todo updated' });
    });

});

app.listen(3000);
