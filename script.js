const images = document.querySelectorAll(".content");
const buttons = document.querySelectorAll("li");

buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        hideAllImages();
        hideAllButtons();
        button.classList.add("active");
        images[idx].classList.add("show")
    })
})

function hideAllButtons() {
    buttons.forEach(button => button.classList.remove("active"));
}

function hideAllImages() {
    images.forEach(image => image.classList.remove("show"));
}