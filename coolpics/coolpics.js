const dialog = document.querySelector("dialog");
const dialogImage = dialog.querySelector("img");
const exitButton = document.querySelector("dialog button");
const images = document.querySelector(".img-wrap");
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");
const showMenu = document.querySelector(".unhide");

// console.log(exitButton);
// console.log(gallery);
console.log(menuButton);
console.log(navigation);

images.addEventListener("click", function(event) {
    if (event.target.src !== undefined) {
        dialogImage.src = "norris-full.jpg";
        dialog.style.display = "flex";
        dialog.style.justifyContent = "center";
        dialog.showModal();
    }
});

exitButton.addEventListener("click", function(){
    dialog.close();
    dialog.style.display = "none";
});

dialog.addEventListener("click", function(event) {
    if (event.target.src === undefined) {
        dialog.close();
        dialog.style.display = "none";
    }
});

dialog.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        dialog.close();
        dialog.style.display = "none";
    }
})

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("unhide");
    // console.log(navigation.classList)
})