//17.
const employees = [
    { name: "Ahmed", salary: 50000 },
    { name: "Anas", salary: 80000 },
    { name: "Ali", salary: 60000 }
];

let member = employees.map((employe) => {
    let increase = employe.salary * 10 / 100;
    return employe.salary + increase;
});
console.log(member);

let someMember = employees.filter((employe) => employe.salary >= 70000)
console.log(someMember);