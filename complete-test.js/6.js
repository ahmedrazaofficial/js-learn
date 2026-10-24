//6.
const employees = [
    { name: "Ahmed", salary: 50000 },
    { name: "Anas", salary: 85000 },
    { name: "Ali", salary: 65000 },
    { name: "Hamza", salary: 100000 }
];
employees.forEach((member) => {
    console.log(member.name, member.salary);
})


let updatedMember = employees.filter((increase) => (increase.salary >= 70000))
console.log(updatedMember);

let total = 0
for (let i = 0; i < employees.length; i++) {
    const element = employees[i].salary;
    total=total+element
}
console.log(total);