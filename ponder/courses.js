// javascript objects

const aCourse = {
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2,
    sections : [
        {
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        {   
            sectionNum: 2, 
            roomNum: 'STC 353', 
            enrolled: 9, 
            days: 'MWF', 
            instructor: 'Brother Warner'
        }
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
}

console.log(aCourse.credits);

let tableBody = document.querySelector("#sections");
// event listener when button is pressed
// document.querySelector("#enrollStudent").addEventListener("click", (e) => {
//     let sectionNumber = document.querySelector("#sectionNumber").value.trim();
//     console.log(sectionNumber);
//     // incriment enrollement of that section by 1
//     aCourse.sections.forEach(section => {
//         if (section.sectionNum == sectionNumber) {
//             section.enrolled += 1;
//             console.log(section.enrolled);
//         }
//     });

//     // console.log(section.sectionNum);
//     // console.log(sections.enrolled);

// });


function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

// re-render the table
function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});