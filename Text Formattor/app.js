document.addEventListener("DOMContentLoaded", function() {
    const textCol = document.getElementById("textCol");
    const upperBtn = document.getElementById("upperBtn");
    const smallBtn = document.getElementById("smallBtn");
    const capiBtn = document.getElementById("capiBtn");
    const boldBtn = document.getElementById("boldBtn");
    const italicBtn = document.getElementById("italicBtn");
    const underBtn = document.getElementById("underBtn");
    let outputText = document.getElementById("outputText");



    upperBtn.addEventListener("click", () => {
        outputText.textContent = textCol.value.toUpperCase();
    });

    smallBtn.addEventListener("click", () => {
        outputText.textContent = textCol.value.toLowerCase();
    });

    capiBtn.addEventListener("click", () => {
        outputText.style.textTransform = "capitalize"
    });

    boldBtn.addEventListener("click", () => {
        outputText.style.fontWeight = "bold";
    });

    italicBtn.addEventListener("click", () => {
        outputText.style.fontStyle = "italic"
    });

    underBtn.addEventListener("click", () => {
        outputText.style.textDecoration = "underline"
    });
});



