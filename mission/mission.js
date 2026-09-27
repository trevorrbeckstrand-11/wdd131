
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let headerText = document.querySelector('h1');
let mainText = document.querySelector('main');
let listText = document.querySelector('ol');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.src = "byui-logo-white.png";
        body.style.backgroundColor = "black";
        headerText.style.color = 'white';
        mainText.style.color = 'white';
        listText.style.color = 'white';

    } else {
        // code for changes to colors and logo
        logo.src = "byui-logo-blue.webp";
        body.style.backgroundColor = "white";
        headerText.style.color = 'black';
        mainText.style.color = 'black';
        listText.style.color = 'black';
    }
}           
                    