const student = {
    name: "ahmed",
    age: 17,
    marks: 1100,
    course: "javascript"
}
function gradeReturn(student) {
    if (student.marks >= 1000) {
        console.log("A grade");
    } else if (student.marks >= 900) {
        console.log("B grade");
    } else if (student.marks >= 800) {
        console.log("C grade");
    } else if (student.marks >= 700) {
        console.log("D grade");
    } else {
        console.log("fail");
    }
}
gradeReturn(student)