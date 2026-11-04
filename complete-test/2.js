//2.
let totalAmount = 15000
let discount = 0

if (totalAmount >= 10000) {
    discount = totalAmount * 15 / 100
    console.log("15% discount: ", discount);
} else if (totalAmount >= 5000) {
    discount = totalAmount * 10 / 100
    console.log("10% discount", discount);
} else {
    console.log("no discount");
}
let final = totalAmount - discount
console.log("pendng amount: ", final);