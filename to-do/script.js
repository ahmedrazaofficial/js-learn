const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")

const todos = []
let todoId = 0;

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = todoInput.value.trim()
    if (value === "") return;

    todos.push(value)
    todoInput.value = ""

    todoList.innerHTML += `
        <li id="todo${todoId}" class="todo-item">
                    <span>${value}</span>
                    <div>
                        <button class="edit-btn">Edit</button>
                        <button id="${"deleteBtn" + todoId}" class="delete-btn" onclick="deleteItem(${todoId})">Delete</button>
                    </div>
                </li>`

    todoId++
})

function deleteItem(id) {
    const todo = document.getElementById(`todo${id}`)
    todo.remove()
}