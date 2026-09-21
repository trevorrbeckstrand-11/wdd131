// How to manipulate the DOM (Document Object Model)

// Grab the h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// Change the text of the element
heading.textContent = "Changed the heading to something else";

// Typing "style" gives you access to the style of the element
heading.style.color = "#0000FF";

// Pick a style and change it
heading.style.letterSpacing = "10px";
heading.style.textDecoration = "underline";
heading.style.lineHeight = "2em";
heading.style.border = "1px solid black";

// querySelectorAll("h1") - will return all the h1 elements
// querySelector("h1") - returns a single element. If there are multiple in the html document, it grabs the first one.

// Retrieve an ID element from the page. These both do the same thing
document.getElementById("topics").style.color = "red";
document.querySelector("#topics").style.color = "red";

let image = document.querySelector("img");

// will print the src attribute of the image tag to the console
console.log(image.getAttribute("src"));

// .setAttribute takes two parameters. The first is the attribute and the second is what you want to set it to
image.setAttribute("src", "https://www.midwestracquetsports.com/images/xxl/WR151411U_1.jpg");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                