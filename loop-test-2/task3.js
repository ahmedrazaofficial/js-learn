const employees = [
    { name: "Ahmed", salary: 50000 },
    { name: "Anas", salary: 75000 },
    { name: "Ali", salary: 45000 },
    { name: "Hamza", salary: 90000 }
]
let final = employees.filter((item) => (item.salary >= 70000))
console.log(final);
