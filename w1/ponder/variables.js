// Declare a variable. Let variables (regular variables) can be changed.
let age = 23;

// How to print to screen. Just like print() in python
console.log(age);

// A constant varaible. Constant variables cannot be changed.
const professorName = "Brother Warner";

// reassing the age variable

age = 22;

console.log(age);

// Scope = where you can reference a varialbe by name
// code blocks are defined by curly braces. You can reference variables inside a scope from the outside but not the other way around.

// if(age == 22) {
    // a new scope (code block)
    // console.log(username);
    // let favoriteColor = "blue";
// }

// This won't work 
// console.log(favroiteColor);

// document.querySelector("h1").style.color = "blue";

let course = 'cse131';

if (true) {
    let student = "John";
    console.log(course); // works because the variable is global
    console.log(student);
}

// console.log(student) // will not work because student is not a global variable, cannot be accessed outside the code block it was defined
console.log(course) // will work because the variable is global

// Constants and variables
const PI = 3.14;
let radius = 3;

// type coersion

const one = 1;
const two = '2';

console.log(professorName);