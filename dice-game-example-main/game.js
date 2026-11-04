// 1. Add event listener to the button
button = document.querySelector("#rollButton");

button.addEventListener("click", event => {
    // animate the die
        // switch the die image sources to the die rolling gif
        const images = document.querySelectorAll("#gameboard img");
        // changing the source image
        images.forEach(image => {
            if (isDieUnlocked(image)) {
                image.src = "assets/die_rolling.gif";
            }
        });

    // change the value each di land on randomely
        setTimeout(() => {
            // run what's in here for 500 milliseconds
            images.forEach(image => {
                // Math.random() returns a random number between 0 - 1 
                let number = Math.random()
                let randomNumber = Math.floor((number * 6) + 1)
                console.log(randomNumber)
                image.src = `assets/white_dice_${randomNumber}.gif`;
            });

        }, 500);
})

function isDieUnlocked(dieImage) {
    // Is the corresponding checkbox checked? Return false or true
    const checkboxes = document.querySelectorAll('#gamboard input');
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkboxes => !checkboxes.checked);
    return unchecked.find(uncheck => unchecked.className == dieImage.className)
}