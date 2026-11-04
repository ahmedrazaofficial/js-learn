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
    // console.log(element);

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
console.log("Not available products: ", rejected.map((item) => item.name));


for (let i = 0; i < products.length; i++) {
    const element = accepted[i];

    for (let j = 0; j < cart.length; j++) {
        const item = cart[j];

        if (element.id === item.productId) {
            let add = accepted.reduce((acc, add) => acc + add.price * item.quantity, 0)
            console.log(add);
        }
    }
}

// {

//     return acc + add.price
// }, 0)
// console.log(add);