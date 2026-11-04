//16.
const cart = [
    { name: "Laptop", price: 100000, quantity: 1 },
    { name: "Mouse", price: 2000, quantity: 2 },
    { name: "Keyboard", price: 5000, quantity: 1 }
];
let multiplication = cart.map((item) => item.price * item.quantity)
console.log(multiplication);
let grandTotal = multiplication.reduce((acc, item) => acc + item)
console.log(grandTotal);
if (grandTotal >= 100000) {
    let discount = grandTotal * 10 / 100
    discount = grandTotal - discount
    console.log(discount);
}