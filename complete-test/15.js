const orders = [
    { id: 101, status: "delivered", amount: 2500 },
    { id: 102, status: "pending", amount: 5000 },
    { id: 103, status: "delivered", amount: 1500 },
    { id: 104, status: "cancelled", amount: 3000 },
    { id: 105, status: "pending", amount: 7000 }
];

let deliveredCount = 0;
let pendingCount = 0;
let cancelledCount = 0;

for (let i = 0; i < orders.length; i++) {
    const element = orders[i];

    if (element.status === "delivered") {
        deliveredCount = deliveredCount + 1;
    } else if (element.status === "pending") {
        pendingCount = pendingCount + 1;
    } else if (element.status === "cancelled") {
        cancelledCount = cancelledCount + 1;
    }
}

console.log("Delivered orders:", deliveredCount);
console.log("Pending orders:", pendingCount);
console.log("Cancelled orders:", cancelledCount);