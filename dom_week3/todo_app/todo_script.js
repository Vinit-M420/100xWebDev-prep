let cntr = 1;

function toDeletetask(id){
    console.log('deleting!')
    const ele = document.getElementById(id);
    ele.parentNode.removeChild(ele);
}

function toAddtask(){
    const inputEl = document.querySelector('input'); // fetching
    const value = inputEl.value.trim();

    if (value === ''){
        alert('Please enter a todo task.');
        return;
    }

    
    const newDivEl = document.createElement("div"); // Creating
    newDivEl.setAttribute('id',cntr); 
   

    newDivEl.innerHTML ="<div style='display: flex;'> <h4>" + value + 
                        "</h4></div> <button onclick='toDeletetask(" + (cntr) +  ")'>Delete Task</button>"; 
                        // Updating
    
    document.querySelector('.tasklist').appendChild(newDivEl); // Adding
    cntr =  cntr + 1;
}
