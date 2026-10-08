// 1. Retrieve elements from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('dialog img');
const closeButton = dialog.querySelector('.close-viewer');


// 2. Add an event listener to show dialog
gallery.addEventListener("click", function(event) {
    console.log(event.target.src);
    // swap out source of diolog img tag to the clicked images src tag
    if (event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full"); // the .replace function takes two parameters: one for the piece you want to replace, the other for what you want to replace it to.
        // show dialog box
        dialog.showModal(); // the showModal function is unique to the dialog element tag.
    }
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});