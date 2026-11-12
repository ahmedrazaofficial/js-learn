const input = document.querySelector(".input-box")
const submit = document.getElementById("todoInput")
const todoList = document.getElementById("todo-list")


let todoId = 0
input.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = submit.value.trim()
    submit.value = ""
    if (inputValue === "") return;
    todoId++
    todoList.innerHTML += `
     <li id="todo${todoId}" class="todo-item">
                    <div>
                    <span>${inputValue}</span>
                        <button class="edit-btn" onclick="handleEditClick(${todoId})">Edit</button>
                        <button class="delete-btn" onclick="deleteItem(${todoId})">Delete</button>
                    </div>
                </li>`
})