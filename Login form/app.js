const msg = document.getElementById("msg");
const showPass = document.querySelector("#show-pass");
const btn = document.querySelector("#btn");
const success = document.querySelector("#success");
const myForm = document.querySelector(".form-sec")


btn.addEventListener("click", (e) => {
    e.preventDefault();

    let fullName = document.querySelector("#namee").value;
    let email = document.querySelector("#email").value;
    let passwords = document.querySelector("#passwords").value;
    let validEnding = ["@gmail.com", "@apple.com", "@outlook.com"];
    let valid = true
    msg.textContent = " ";

    if (fullName === "" || email === "" || passwords === ""){
        msg.classList.add("error");
        msg.textContent = "Please fill the form";
        setTimeout( () => msg.remove(), 5000);
        setTimeout(" location.reload(true);", 3000);
        return;
    }

    if (passwords.length < 8){
        msg.classList.add("error");
        msg.textContent = "Password must be atleast 8 characters";
        setTimeout( () => msg.remove(), 3000);
        setTimeout(" location.reload(true);", 1000);
        return;
    }
    
    if (email.endsWith(validEnding)){
        msg.classList.add("error");
        msg.innerHTML = "Please enter a valid email";
        valid = false
        setTimeout( () => msg.remove(), 3000);
        setTimeout(" location.reload(true);", 1000);
        
    }

    else{
        myForm.style.display = "none";
        success.style.display = "block";
        setTimeout( () => msg.remove(), 3000);
        setTimeout(" location.reload(true);", 1000);
    }
});

