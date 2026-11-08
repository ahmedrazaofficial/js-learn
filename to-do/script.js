const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const btnSubmit = document.getElementById("btn-submit")

let todoId = 0;
let isUpdating = false;
let updatingId = null;

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = todoInput.value.trim()
    if (value === "") return;

    todoInput.value = ""

    if (isUpdating) {
        // Update task
        const todo = document.getElementById(`todo${updatingId}`)
        todo.children[0].textContent = value
        isUpdating = false
        updatingId = null
        btnSubmit.textContent = "Add Task"
    } else {
        // New task add
        todoList.innerHTML += `
        <li id="todo${todoId}" class="todo-item">
                    <span>${value}</span>
                    <div>
                        <button class="edit-btn" onclick="handleEditClick(${todoId})">Edit</button>
                        <button class="delete-btn" onclick="deleteItem(${todoId})">Delete</button>
                    </div>
                </li>`

        todoId++
    }
})

function deleteItem(id) {
    const todo = document.getElementById(`todo${id}`)
    todo.remove()
}

function handleEditClick(id) {
    const todo = document.getElementById(`todo${id}`)
    const value = todo.children[0].textContent;
    todoInput.value = value;
    isUpdating = true;
    updatingId = id;
    btnSubmit.textContent = "Update"
}   