let array = [
    { name: "Ahmed", marks: 85, age: 20 },
    { name: "Anas", marks: 92, age: 21 },
    { name: "Ibrahim", marks: 68, age: 19 }
]
function info(array) {
    let student = array[1]
    console.log(student);
    let grade;
    if (student.marks >= 100) {
        console.log(grade = "A grade");
    } else if (student.marks >= 80) {
        console.log(grade = "B grade");
    } else if (student.marks >= 60) {
        console.log(grade = "C grade");
    } else if (student.marks >= 40) {
        console.log(grade = "D grade");
    } else {
        console.log(grade = "fail");

    }
    console.log(`${student.name} is ${student.age} years old, scored ${student.marks} and got ${grade}  `);

}
info(array)
