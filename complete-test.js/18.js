const courses = [
    { name: "JavaScript", price: 2999, students: 50 },
    { name: "React", price: 3999, students: 30 },
    { name: "Node.js", price: 4999, students: 20 }
];
let studentTotal = courses.map((check) => {
    return check.price * check.students
})
console.log(studentTotal);