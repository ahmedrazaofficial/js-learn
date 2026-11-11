const input = document.querySelector(".input-box")
const submit = document.getElementById("todoInput")



input.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = submit.value.trim()
    if (inputValue === "") return;

    submit.value = ""
})