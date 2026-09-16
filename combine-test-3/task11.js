//11.
let date = new Date("2026-01-15")
function dateCalculation() {
    date.setDate(date.getDate() + 30)
    return date.toDateString()
}
console.log(dateCalculation());
