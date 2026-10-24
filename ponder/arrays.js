
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

// students.forEach(student => {
//     const person = `
//         <p>${first} ${last}</p>
//    `;

//    console.log(iterate)

//    document.querySelector(main).innerHTML += person;
// })

students.forEach(myFunction);

function myFunction(student) {
    const person = `
        <p>${student.first} ${student.last}</p>
    `;

    document.querySelector('main').innerHTML += person
}


