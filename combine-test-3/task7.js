//7.
let employee = {
    name: "ahmed",
    salary: 75000,
    department: "engineering"
}
function calculation(employee) {
    return `my new salary is ${employee.salary + 5000}`
}
console.log(calculation(employee));
