const fs = require('fs');

str = 'Buy milk'

const todoData = fs.readFileSync('todo1.json', 'utf-8');
const todo = JSON.parse(todoData);

console.log(todo.task); 