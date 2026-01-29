let colorInput = document.querySelector(".color-input");

let colorButton = document.querySelector(".color-button");


colorButton.addEventListener("click", () => {
    document.body.style.background = colorInput.value;

})

let today = document.querySelector(".today");
let inputText = document.querySelector(".input-text")
let inputButton = document.querySelector(".input-button");
let todoEntry;

function createDiv (){
    let todo = document.createElement("div");
    todo.className = "todo";
    today.appendChild(todo)

    let todoRadio = document.createElement("input")
    todoRadio.setAttribute("type", "radio");   
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
        todoEntry.isContentEditable = true;
        todoEntry.focus();
    })
}



inputButton.addEventListener("click", () => {
    if (inputText.value === ""){
        return
    } else {
        createDiv()
        todoEntry.textContent = inputText.value;
        inputText.value = "";
        inputText.focus();
    }
})

