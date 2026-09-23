const employees = [
    { name: "Ahmed", department: "Development" },
    { name: "Anas", department: "Design" },
    { name: "Anas", department: "Testing" },
    { name: "Ali", department: "Development" }
]

for (const employeName of employees) {
    if (employeName.department == "Development") {
        console.log(employeName.name, employeName.department);
    }
}