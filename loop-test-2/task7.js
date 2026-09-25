const cart = [
    { itemName: "Laptop", price: 120000 },
    { itemName: "Mouse", price: 2500 },
    { itemName: "Keyboard", price: 5000 },
    { itemName: "Monitor", price: 35000 }
]
let final = cart.filter((item) => item.price > 5000)
let total = final.reduce((sum, item) => sum + item.price, 0)
console.log(total);
