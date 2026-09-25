const employees = [
    { name: "Ahmed", salary: 50000 },
    { name: "Anas", salary: 70000 },
    { name: "Ali", salary: 90000 }
]
let bonus = employees.map((item) => item.salary + 5000)
console.log(bonus);
let final = bonus.filter((item) => item >= 75000)
console.log(final);