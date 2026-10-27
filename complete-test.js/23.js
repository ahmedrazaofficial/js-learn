const departments = [
    {
        name: "Development",
        employees: [
            { name: "Ahmed", salary: 80000 },
            { name: "Anas", salary: 90000 }
        ]
    },
    {
        name: "Design",
        employees: [
            { name: "Ali", salary: 60000 },
            { name: "Hamza", salary: 70000 }
        ]
    }
];

for (let i = 0; i < departments.length; i++) {
    const element = departments[i];
    console.log(element.employees);

    let total = 0
    for (let j = 0; j < element.employees.length; j++) {
        const add = element.employees[j].salary;
        total = total + add;
    }
    console.log(total);
}