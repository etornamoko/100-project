let show = document.querySelector("#show");
let passw = document.querySelector("#passw")

show.addEventListener("click", () => {
   
    if (passw.type === "password"){
        passw.type = "text";
        show.classList.toggle("fa-eye");
    }else{
        passw.type = "password"
        show.classList.remove("fa-eye");
    }
})