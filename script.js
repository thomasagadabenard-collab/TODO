let colorInput = document.querySelector(".color-input");

let colorButton = document.querySelector(".color-button");


colorButton.addEventListener("click", () => {
    document.body.style.background = colorInput.value;

})


const today = document.querySelector(".today");
const inputText = document.querySelector(".input-text");
const inputButton = document.querySelector(".input-button");
const filters = document.querySelectorAll(".tasks-div h3");


function createTodo() {
    const todo = document.createElement("div");
    todo.className = "todo";
    todo.dataset.status = "active"; 

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-radio";

    const entry = document.createElement("p");
    entry.className = "todo-entry";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-button";

    const deleteImg = document.createElement("img");
    deleteImg.src = "images/delete.svg";
    deleteImg.alt = "delete icon";
    deleteImg.className = "todo-button-delete-img";

    deleteBtn.appendChild(deleteImg);

    const editBtn = document.createElement("button");
    editBtn.className = "todo-edit";

    const editImg = document.createElement("img");
    editImg.src = "images/edit.svg";
    editImg.alt = "edit icon";
    editImg.className = "todo-butto-edit-img";

    editBtn.appendChild(editImg);

    todo.append(checkbox, entry, deleteBtn, editBtn);
    today.appendChild(todo);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            todo.dataset.status = "completed";
            todo.classList.add("completed");
        } else {
            todo.dataset.status = "active";
            todo.classList.remove("completed");
        }
    });

    deleteBtn.addEventListener("click", () => {
        todo.remove();
    });

    editBtn.addEventListener("click", () => {
        entry.contentEditable = true;
        entry.focus();
    });

    return entry;
}


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
    if (inputText.value.trim() === "") return;

    const entry = createTodo();
    entry.textContent = inputText.value.trim();

    inputText.value = "";
    inputText.focus();
});


fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => console.log(data));
