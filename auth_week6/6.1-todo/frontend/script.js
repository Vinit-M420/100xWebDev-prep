const API_URL = 'http://localhost:3001/todos';
// const axios = require('axios');
// const { response } = require('express');

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();

});

// Fetch todos from backend
function fetchTodos() {
    fetch(API_URL)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => addTodoToDOM(todo));
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    const todoList = document.querySelector('#todo-list');
    let todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.setAttribute('data-id', todo.id);
    
    const title = document.createElement('span');
    title.textContent = todo.todo; 

    title.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
        // Optionally, you can also update the backend here!
    });
    
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));
    deleteButton.className = 'delete-btn';

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => updateTodo(todo.id));
    updateButton.className = 'update-btn';

    todoItem.appendChild(title);
    todoItem.appendChild(btnContainer);
    btnContainer.appendChild(updateButton);
    btnContainer.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    const todoinput = document.getElementById('todo-input');
    const taskname = todoinput.value;
    if (!taskname) {
        console.error('Input not found');
        return;
    }

    const newtodo = { todo: taskname }

    axios.post(API_URL, newtodo , {
        headers : {
            'Content-Type': "application/json"
        }
    })
    .then(response => {
        addTodoToDOM(response.data.todo);
        todoinput.value = '';}
    )
    .catch(error => {
        console.error('Error in adding the todo:' + error);
    })

});

// Toggle todo completion
// function toggleTodo(id, completed) {
// //    write here
// }

// Delete a todo
function deleteTodo(id) {
    axios.delete(`${API_URL}/${id}`)
        .then(() =>{
             const todo = document.querySelector(`[data-id='${id}']`) ;
             if (todo) todo.remove();
            })
        .catch( error => {
            console.error('Error deleting todo:', error) })
}

function updateTodo(id){
    const updatedTaskName = window.prompt("Enter the updated task name:");

    // If the user cancels or enters an empty string, do nothing
    if (!updatedTaskName || updatedTaskName.trim() === "") {
        return;
    }

    axios.put(`${API_URL}/${id}`,  { todo: updatedTaskName })
        .then( () => {
            const todo = document.querySelector(`[data-id='${id}']`) ;
            if (todo) {
                // Assuming the span is the first child
                todo.querySelector('span').textContent = updatedTaskName;
            }
        })
        .catch(error => {
            console.error('Error updating todo:', error);
        });
}