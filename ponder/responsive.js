let menuButton = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");
let header = document.querySelector("header");

menuButton.addEventListener("click", function (e) {
    header.classList.toggle("change");
    nav.classList.toggle("change");
})

