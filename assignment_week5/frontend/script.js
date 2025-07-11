let isSigningUp = false;
let isAddingTodo = false;

document.addEventListener('DOMContentLoaded', function() {

    // Signup Form
    const signUpForm = document.getElementById("signup-form");
    if (signUpForm){
        signUpForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (isSigningUp) return;
        isSigningUp = true;

        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        try{
            const response = await fetch("http://localhost:3004/user/signup" ,{
                method: "POST",
                headers : {
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify( { email , password } )
            });

            // console.log('Response status:', response.status);
            // console.log('Response ok:', response.ok);
            // console.log('Full response:', response);    

            const result = await response.json()
            isSigningUp = false;

    
            if (response.ok){
                console.log(response);
                console.log('Signup successful, switching to signin');
                document.getElementById("response-message").innerHTML = result.message || 'Signup Successful. You can sign in now'
                document.querySelector(".signup-container").style.display = 'none';
                document.querySelector(".signin-container").style.display = 'block';
            }
            else{
                document.getElementById("response-message").innerHTML = result.message || 'Signup Failed'
            }
        }
        catch(error){
            
            isSigningUp = false;
            document.getElementById('response-message').innerText = 'Error during signup';
        }
    });
        };


    // Signin Form
    const signInForm = document.getElementById("signin-form");
    if (signInForm) {
        signInForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;

        try{
            const response = await fetch("http://localhost:3004/user/signin" ,{
                method: "POST",
                headers : {
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify( { email , password } )
            });
            const result = await response.json()

            if (response.ok){
                // console.log('Signin result:', result);  
                // console.log('Token from result:', result.token);  
                localStorage.setItem('token', result.token);

                const storedToken = localStorage.getItem('token');
                
                if (storedToken === 'undefined'){
                    return document.getElementById("response-message").innerHTML = result.message;
                }

                showTodoContainer();
                document.getElementById("response-message").innerHTML = 
                'Signed in Successful <a href="#" id="logout-link">Logout</a>'

                document.getElementById("logout-link").addEventListener("click", async (e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    document.querySelector(".todo-container").style.display = 'none';
                    document.querySelector(".signin-container").style.display = 'block';
                    document.getElementById('response-message').innerText = '';
                })
            }
            else{
                console.log(result);
                document.getElementById("response-message").innerHTML = result.message || 'Signin Failed'
            }
        }
        catch(error){
            isSigningUp = false;
            document.getElementById('response-message').innerText = 'Error during signin';
        }})
    };

    // Adding do to the Todo Form
    const todoForm = document.getElementById("todo-form");
    if (todoForm) {
        todoForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        if (isAddingTodo) return;
        isAddingTodo = true;

        const todoInput= document.getElementById("todo-title");
        const todoTitle = todoInput.value.trim();

        if (!todoTitle || todoTitle === '' || todoTitle.length === 0){ 
            isAddingTodo= false; 
            alert("Please enter a todo title");
            return; 
        }
        const token = localStorage.getItem('token');

        try {
            const response = await fetch("http://localhost:3004/todos" , {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${token}` 
                },
                body: JSON.stringify( { title: todoTitle } )
            });

            const result = await response.json();
            isAddingTodo = false;
            if (response.ok){
                todoInput.value = "";
                loadTodos();
            }
            else { 
                console.error(result.msg); 
            }
        }
        catch (error){
            isAddingTodo=false;
            console.error("Error while adding your todo:", error);  
        }})
    };

    // Navigating between Signup and Signin
     const showSigninBtn = document.getElementById('show-signin');
    if (showSigninBtn) {
        showSigninBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".signup-container").style.display = 'none';
            document.querySelector(".signin-container").style.display = 'block';
        });
    }

    const showSignupBtn = document.getElementById('show-signup');
    if (showSignupBtn) {
        showSignupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".signin-container").style.display = 'none';
            document.querySelector(".signup-container").style.display = 'block';
        });
    }

    initializeApp();
});

// Load Todos
async function loadTodos(){
    console.log('loadTodos() called');
    const token = localStorage.getItem('token');
    //console.log('Stored token in loadTodos:', token);
    try{
        const response = await fetch("http://localhost:3004/todos" , {
            method: "GET",
            headers : {
                "Authorization": `Bearer ${token}` 
            }        
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const  { todos } = await response.json();
        console.log('Response data:', todos);

        if (!todos) {
            console.error('No todos property in response');
            return;
        }
        const todoList = document.getElementById("todo-list");
        todoList.innerHTML = '';

        todos.forEach(todo => {
            let li = document.createElement('li');
            let textSpan = document.createElement('span');
            textSpan.textContent = todo.title;
            textSpan.className = 'todo-text';


            let btnDiv = document.createElement('div')
            btnDiv.className = 'btn-container';
            let doneBtn = document.createElement("button");
            doneBtn.textContent= "Done";
            doneBtn.onclick = () => {
                doneTodo(todo._id, !todo.done);
            };

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent= "Delete";
            deleteBtn.className = 'delete-btn'
            deleteBtn.onclick = () => {
                deleteTodo(todo._id);
            };

            if (todo.done) {
                textSpan.style.textDecoration = 'line-through';
                textSpan.style.opacity = 0.6;
                doneBtn.style.opacity = 0.6;
            }

            // else if (!todo.done) {
            btnDiv.appendChild(doneBtn);
            btnDiv.appendChild(deleteBtn);
        
            li.appendChild(textSpan);
            li.appendChild(btnDiv);
            todoList.appendChild(li);
        })
        document.getElementById("response-message").innerHTML = 
                'Want to Log out? <a href="#" id="logout-link">Logout</a>'

        document.getElementById("logout-link").addEventListener("click", async (e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    document.querySelector(".todo-container").style.display = 'none';
                    document.querySelector(".signin-container").style.display = 'block';
                    document.getElementById('response-message').innerText = '';
                })
    }
    catch(error){
        console.log(error.message);
        //res.json({ message : 'Error in fetching the todos', error: error.message})
    }
}

async function doneTodo(id, done) {
    const token = localStorage.getItem("token");
    try{
        const response = await fetch(`http://localhost:3004/todos/${id}/done` , {
            method: "PUT",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({ done })
        });
        loadTodos();
    }
    catch(error){
        console.error('Error fetching todos:', error);  
    }
};

async function deleteTodo(id) {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(`http://localhost:3004/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}` 
            }
        });

        if (response.ok) {
            console.log('Todo deleted successfully');
            loadTodos(); // Reload todos after successful deletion
        } else {
            console.error('Failed to delete todo:', response.status);
        }
    }
    catch(error) {
        console.error('Error deleting todo:', error);
    }
}



function initializeApp() {
    const token = localStorage.getItem('token');
    if (token) {
        // User is logged in - show todo container
        showTodoContainer();

    } else {
        // User is not logged in - show signup by default
        showSignupContainer();
    }
}

function showSignupContainer() {
    const signupContainer = document.querySelector(".signup-container");
    const signinContainer = document.querySelector(".signin-container");
    const todoContainer = document.querySelector(".todo-container");
    
    if (signupContainer) signupContainer.style.display = "block";
    if (signinContainer) signinContainer.style.display = "none";
    if (todoContainer) todoContainer.style.display = "none";
}

function showSigninContainer() {
    const signupContainer = document.querySelector(".signup-container");
    const signinContainer = document.querySelector(".signin-container");
    const todoContainer = document.querySelector(".todo-container");
    
    if (signupContainer) signupContainer.style.display = "none";
    if (signinContainer) signinContainer.style.display = "block";
    if (todoContainer) todoContainer.style.display = "none";
}

function showTodoContainer() {
    const signupContainer = document.querySelector(".signup-container");
    const signinContainer = document.querySelector(".signin-container");
    const todoContainer = document.querySelector(".todo-container");
    
    if (signupContainer) signupContainer.style.display = "none";
    if (signinContainer) signinContainer.style.display = "none";
    if (todoContainer) todoContainer.style.display = "block";
    
    // Load todos when showing todo container
    loadTodos();
}
