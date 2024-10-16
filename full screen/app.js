const navIcon = document.querySelector("#nav-icon");
const navbar = document.querySelector("#navbar");
const navList = document.querySelector("#nav-list");
const navItems = document.querySelectorAll(".nav-item");
const img = document.querySelector("#img")

navIcon.addEventListener("click", () => {
    // img.style.opacity = "0";
    navbar.classList.toggle("hide-nav")
    
});

navItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        navbar.classList.toggle("hide-nav")
        // const link = item.getAttribute("data-link");
        // Window.location.href = link;
    })
})