// const mynewNum = [];

// myNumber.forEach((item) => {
//     mynewNum.push(item + 10);
// });
// console.log(mynewNum);      // foreach method

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNumber.map((item) => item + 10)
console.log(newNum);

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newVal = val
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newVal);
