//2.
let customer = 15000
let discount = 0

if (customer >= 10000) {
    discount = customer * 15 / 100
    console.log("15% discount: ", discount);
} else if (customer >= 5000) {
    discount = customer * 10 / 100
    console.log("10% discount", discount);
} else {
    console.log("no discount");
}
let final = customer - discount
console.log("pendng amount: ", final);