// Functions (use "function" to declare a function), (remember to call the function to actually get it to run)
function myFunctionName(name) {
    console.log("Your name is: " + name);
}

// myFunctionName("Brother Warner"); // Call the function

// Event Listeners
    // Have to retrieve something from the DOM
    let select = document.querySelector("#theme-select")
    // register an event listener. An event is something you can do on a page. Ex) click, highlight, scroll, typing, drag and drop
    // Event we are listening for to call when that event occurs. 
    select.addEventListener("change", handleEvent) // this event "change" means the user has changed the selection in the select box.

    function handleEvent(event) {
        console.log(event);
        console.log(event.target.value);
    }

// If statements



let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          