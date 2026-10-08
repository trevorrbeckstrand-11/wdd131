// arrow function
let sum = (num1, num2) => num1 + num2;

console.log(sum(1, 2));

// defined function
function addIt(num1, num2) {
    return(num1 + num2);
};

console.log(addIt(1, 2));

// Expression function
const heading = document.querySelector("h1");

heading.addEventListener('click', function() {
    heading.textContent = 'Hello World!';
});

// same thing but calling the addIt function

heading.addEventListener('click', function() {
    heading.textContent = addIt(1, 2);
});