const cart = [
    { item: "Laptop", price: 100000, quantity: 1 },
    { item: "Mouse", price: 2000, quantity: 3 },
    { item: "Keyboard", price: 5000, quantity: 2 },
    { item: "USB", price: 1000, quantity: 5 }
]
let multiplication = cart.map((item) => item.price * item.quantity)
console.log(multiplication);
let final = cart.filter((item) => item.price * item.quantity >= 5000)
console.log(final);
let calculation = final.reduce((item, current) => item + current.price, 0)
console.log(calculation);
