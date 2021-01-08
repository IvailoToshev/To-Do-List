const todoInput = document.querySelector('.todo-input');
const btn = document.querySelector('.btn-add');
const todoList = document.querySelector('.todo-ul');

btn.addEventListener("click", addTask);
todoList.addEventListener("click", deleteCompleted);

function addTask(ev) {
    ev.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTask = document.createElement('li');
    newTask.innerText = todoInput.value; 
    newTask.classList.add('todo-item');
    todoDiv.appendChild(newTask);
    if(todoInput.value === ""){
        return null
    }
    
    //Complete Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn')    
    todoDiv.appendChild(completeButton);

    //Delete Button 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton);

    //Append to list 
    todoList.appendChild(todoDiv);
    //Clear todoInput value
    todoInput.value = ""
}

function deleteCompleted(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('click', function () {
            todo.remove()
        })
    }
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    };
}