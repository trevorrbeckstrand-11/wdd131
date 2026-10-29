firstName = document.getElementById("firstName");
lastName = document.getElementById("lastName");
email = document.getElementById("email");
type = document.getElementById("type");
dateInput = document.getElementById("eventDate");
studentContainer = document.getElementById("studentNumberContainer");
accessCodeContainer = document.getElementById("accessCodeContainer");
studentNumber = document.getElementById("studentNumber");
accessCode = document.getElementById("accessCode");
form = document.querySelector("form");
message = document.getElementById("output");

function showHiddenLabel() {
    console.log(type.value);
    if (type.value == "student") {
        studentContainer.style.display = "flex";
        accessCodeContainer.style.display = "none";
        type.setAttribute("required", "");
    } else if (type.value == "Guest") {
        studentContainer.style.display = "none";
        accessCodeContainer.style.display = "flex";
    } else {
        studentContainer.style.display = "none";
        accessCodeContainer.style.display = "none";
    };
}

type.addEventListener("change", showHiddenLabel);
showHiddenLabel();

function isPastDate(date) {
    let today = new Date();
    let chosen = new Date(date);
    return chosen < today;
} 

form.addEventListener("submit", function(event) {
    
    event.preventDefault();
    message.textContent = "";

    // console.log(studentNumber.value.length);

    if (type.value == "student" && studentNumber.value.length != 9) {
        message.textContent = "The I-number must be nine digits!"
        return;
    } else if (type.value == "Guest" && accessCode.value != "EVENT131") {
        message.textContent = "Incorrect event number";
        return;
    } else if (isPastDate(dateInput.value)) {
        message.textContent = "Please choose a future date";
        return;
    } else {
        let confirmation = `
            <h2>Ticket Created</h2>
            <p>${firstName.value}</p>
            <p>${type.value}</p>
            <p>${dateInput.value}</p>
        `;

        message.innerHTML += confirmation;
    }


    form.reset();
    studentContainer.style.display = "none";
    accessCodeContainer.style.display = "none";
})


//   if (isPastDate(availableDate)) {
//     output.textContent = "Please choose a later date.";
//     return;
//   }

//   function isPastDate(value) {
//   const today = new Date();
//   const chosen = new Date(value);
//   return chosen < today;
// }