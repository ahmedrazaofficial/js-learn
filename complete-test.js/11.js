//11.
const expenses = [1200, 3500, 800, 2200, 4500, 1500];
let total = 0
for (let i = 0; i < expenses.length; i++) {
    const element = expenses[i];
    total = total + element
}
console.log(total);
let average = total / 6
console.log(average);
let fewNumber = expenses.filter((num) => (num > 2000))
console.log(fewNumber);
