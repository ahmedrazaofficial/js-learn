//10.
const students = [
    { name: "Ahmed", marks: 85 },
    { name: "Anas", marks: 42 },
    { name: "Ali", marks: 67 },
    { name: "Hamza", marks: 30 }
];

students.forEach((student) => {
    if (student.marks >= 40) {
        console.log(student.name + "  Pass");
    } else {
        console.log(student.name + "  Fail");
    }
});


const passedStudents = students.filter((student) => student.marks >= 40);
console.log("Passed Students:", passedStudents);



let total = 0
for (let i = 0; i < students.length; i++) {
    const element = students[i].marks;
    total = total + element / 4
}
console.log(total);