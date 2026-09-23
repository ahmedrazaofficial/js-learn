///20.
const courses = [
    { courseName: "JavaScript", duration: 3 },
    { courseName: "React", duration: 2 },
    { courseName: "Node.js", duration: 4 }
]
let total = 0

courses.forEach((item) => {
    console.log(`${item.courseName} - ${item.duration} month`);
    total += item.duration;
})
console.log(total);