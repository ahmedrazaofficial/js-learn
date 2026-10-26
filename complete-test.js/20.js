const transactions = [
    { type: "credit", amount: 10000 },
    { type: "debit", amount: 2500 },
    { type: "credit", amount: 5000 },
    { type: "debit", amount: 1000 },
    { type: "debit", amount: 500 }
];


const credits = transactions
    .filter((item) => item.type === "credit")
    .reduce((acc, item) => acc + item.amount, 0);
console.log("Total Credits:", credits);


const debits = transactions
    .filter(item => item.type === "debit")
    .reduce((acc, item) => acc + item.amount, 0);
console.log("Total Debits:", debits);

const netBalance = credits - debits;
console.log("Net Balance Change:", netBalance);