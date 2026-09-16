//2.
let student = {
    naam: "ahmed",
    age: 17,
    course: "javascript",
    marks: 250
}
function information(student) {
    return `my name is ${student.naam} and I am learning ${student.course} I got these marks ${student.marks}`
}
console.log(information(student));
