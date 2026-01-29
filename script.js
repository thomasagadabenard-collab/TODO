let colorInput = document.querySelector(".color-input");

let colorButton = document.querySelector(".color-button");


colorButton.addEventListener("click", () => {
    document.body.style.background = colorInput.value;

})

let today = document.querySelector(".today");
let inputText = document.querySelector(".input-text")
let inputButton = document.querySelector(".input-button");
let todoEntry;
let todoRadio;

function createDiv (){
    let todo = document.createElement("div");
    todo.className = "todo";
    today.appendChild(todo)

    todoRadio = document.createElement("input")
    todoRadio.setAttribute("type", "checkbox");   
    todoRadio.className = "todo-radio";
    todo.appendChild(todoRadio);

    todoEntry = document.createElement("p");
    todoEntry.className = "todo-entry";
    todo.appendChild(todoEntry)

    let todoButton = document.createElement("button");
    todoButton.className = "todo-button";
    todo.appendChild(todoButton)
    let deleteImg = document.createElement("img");
    deleteImg.src = "images/delete.svg";
    deleteImg.alt = "delete icon";
    deleteImg.className = "todo-button-delete-img";
    todoButton.appendChild(deleteImg)

    let todoEdit = document.createElement("button");
    todoEdit.className = "todo-edit";
    todo.appendChild(todoEdit)
    let editImg = document.createElement("img");
    editImg.src = "images/edit.svg";
    editImg.alt = "edit icon";
    editImg.className = "todo-butto-edit-img";
    todoEdit.appendChild(editImg)

    deleteImg.addEventListener("click", () => {
        todo.remove();
    })

    todoEdit.addEventListener("click", () => {
        todoEntry.contenteditable = true;
        todoEntry.focus();
    })

    todoRadio.addEventListener("change", () => {
        if (todoRadio.checked) {
            todo.dataset.status = "completed";
            todo.classList.add("completed");
        } else {
            todo.dataset.status = "active";
            todo.classList.remove("completed");
        }
    });

    return todoEntry;
}

const filters = document.querySelectorAll(".tasks-div h3");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filterTodos(filter.textContent.toLowerCase());
    });
});

function filterTodos(type) {
    const todos = document.querySelectorAll(".todo");

    todos.forEach(todo => {
        const status = todo.dataset.status;

        if (type === "all") {
            todo.style.display = "flex";
        } 
        else if (type === "active") {
            todo.style.display = status === "active" ? "flex" : "none";
        } 
        else if (type === "completed") {
            todo.style.display = status === "completed" ? "flex" : "none";
        }
    });
}


inputButton.addEventListener("click", () => {
    if (inputText.value === "") return;

    const entry = createDiv();
    entry.textContent = inputText.value;

    inputText.value = "";
    inputText.focus();
});














