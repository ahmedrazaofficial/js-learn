const orders = [
    { orderId: 101, amount: 2500, status: "delivered" },
    { orderId: 102, amount: 5000, status: "pending" },
    { orderId: 103, amount: 1500, status: "delivered" },
    { orderId: 104, amount: 7000, status: "pending" }
]
let final = orders.filter((item) => item.status == "pending")
console.log(final);
let calculation = final.reduce((item, current) => item + current.amount, 0)
console.log(calculation);