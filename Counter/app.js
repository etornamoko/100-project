let display = document.querySelector("#display");
const increment = document.querySelector("#increment");
const save = document.querySelector("#save");
let entries = document.querySelector("#entries");
let view = 0;
let enter = [];

increment.addEventListener("click", () => {
    view++;
    display.innerHTML = view;
});  

save.addEventListener("click", () =>{
    enter.push(view);
    entries.textContent = enter.join(", ")

});



