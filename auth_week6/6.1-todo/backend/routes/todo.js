let todos = []; // in memory space
let idCounter = 1; 

export async function getAllTodo (req, res, next){
    res.send(todos); 
}


export async function createTodo (req, res, next){
    console.log("DEBUG req.body:", req.body);
    const task = req.body.todo;

    // Validation: Check if 'todo' is present and not empty
    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' });
    }
    todos.push({
        id: idCounter++, todo: task
    });
    return res.status(200).json({ msg: 'Todo added!', todo: { id: idCounter - 1, todo: task } });
}


export async function updateTodo (req, res, next){
    const newtaskName = req.body.todo;
    const id = req.params.id;

    if (!newtaskName) {
        return res.status(400).json({ error: 'Task is required' });
    }

    let todo = todos.find(t => t.id == id);
    if (!todo) {
        return res.status(400).json({ error: 'Todo not found' });
    }

    todo.todo = newtaskName;
    return res.status(200).json({ message: 'Todo updated', todo });
}

// export async function deleteTodo (req, res, next){
//     todos = []
// }

export async function deleteTodoById (req, res, next){
    const id = req.params.id;
    let todoIndex = todos.findIndex(t => t.id == id);
    if (todoIndex !== -1){
        todos.splice(todoIndex,1);
        res.status(204).json({ msg: `Todo deleted` }); 
    }
    else{
        return res.status(404).json({ error: 'Todo with given ID not found' });
    }
    
}

export async function searchTodo(req,res,next) {
    const searchEle = req.query;
    if (!searchEle) {
        return res.status(400).json({ message: 'Query parameter missing' });
    } 
    
    let todo = todos.find(t => t.todo.toLowerCase().replace() === searchEle.toLowerCase());
    res.send(todo);
}