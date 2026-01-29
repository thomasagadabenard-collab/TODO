let colorInput = document.querySelector(".color-input");

let colorButton = document.querySelector(".color-button");


colorButton.addEventListener("click", () => {
    document.body.style.background = colorInput.value;

})

