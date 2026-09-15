/* 
1 function students ka array aur 1 no recieve hoga (1,2,3)
Name: <naam>; Age: <age>; Marks: <marks>
*/

let students = [
    {
        naam: "ahmed",
        age: 17,
        marks: 250
    },
    {
        naam: "anas",
        age: 20,
        marks: 222
    },
    {
        naam: "ibrahim",
        age: 18,
        marks: 200
    }
]

function handleStudentInfo(students, no) {
    let student = students[no - 1];
    return `Name: ${student.naam}; Age: ${student.age}; Marks: ${student.marks}`
}

console.log(handleStudentInfo(students, 3))
// console.log(student);