const products = [
    { id: 1, name: "Laptop", price: 100000, stock: 3 },
    { id: 2, name: "Mouse", price: 2000, stock: 10 },
    { id: 3, name: "Keyboard", price: 5000, stock: 0 },
    { id: 4, name: "Monitor", price: 25000, stock: 2 }
];

const cart = [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 2 },
    { productId: 3, quantity: 1 }
];
const accepted = []
const rejected = []
for (let i = 0; i < cart.length; i++) {
    const element = cart[i];

    for (let index = 0; index < products.length; index++) {
        const check = products[index];
        if (element.productId === check.id) {
            if (element.quantity <= check.stock) {
                accepted.push(check)
            } else {
                rejected.push(check)
            }
        }
    }
}
console.log("Available products: ", accepted.map((item) => item.name));
console.log("Not available products: ", rejected.map((item) => item.name), "\n");
// "\n"  =>  break line 

let total = 0
for (let i = 0; i < accepted.length; i++) {
    const element = accepted[i];

    for (let j = 0; j < cart.length; j++) {
        const item = cart[j];

        if (element.id === item.productId) {
            const subtotal = element.price * item.quantity
            console.log(`${element.name}: ${element.price} x ${item.quantity} = Rs. ${subtotal}`);
            total += subtotal
        }
    }
}
console.log(`Total price: ${total}`);
if (total >= 50000) {
    let discount = total * 5 / 100
    console.log(`Discount: ${discount}`);
    total -= discount
    console.log(`After discount bill: ${total}`);
}