// attacked button
const attackedButton = document.querySelector("#attacked");
// level up button
const levelUpButton = document.getElementById("levelup");
// health
const health = document.getElementById("health");
let healthNumber = 100;
// level
const level = document.getElementById("level");
let levelNumber = 5;
// revive button
const reviveButton = document.getElementById("revive");

// event listener on attacked button
attackedButton.addEventListener("click", event => {
    // subtract 20 from the health
    if (healthNumber > 0) {
        healthNumber = healthNumber - 20;
    };

    health.innerHTML = `<strong>Health: </strong>${healthNumber}`;

    if (healthNumber === 0) {
        setTimeout(() => {
            alert("The character died!");
        }, 300);
    };
    
    // if (healthNumber == 0) {
    //     reviveButton.toggleAttribute("hidden");
    // };
});

// event listener on level up button
levelUpButton.addEventListener("click", event => {
    if (levelNumber < 10) {
        levelNumber = levelNumber + 1
        level.innerHTML = `<strong>Level: </strong>${levelNumber}`;
    };
});

// even listener on revive button
// reviveButton.addEventListener("click", event => {
//     healthNumber = 100;
//     health.innerHTML = `<strong>Health: </strong>${healthNumber}`;
//     reviveButton.toggleAttribute("hidden");
//     levelNumber = 0
//     level.innerHTML = `<strong>Level: </strong>${levelNumber}`;
// })  