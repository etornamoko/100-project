let selectField = document.getElementById("selectField");

let selectText = document.getElementById("selectText");

let list = document.getElementById("list");

let arrow = document.getElementById("arrow");

let options =  document.getElementsByClassName("options")


selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrow.classList.toggle("fa-angle-up");
});

for (option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("fa-angle-up")
    }
}

