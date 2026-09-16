//15.
let shoppingCart = [
    { name: "Mouse", price: 1500, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 2 },
    { name: "Headphones", price: 2500, quantity: 2 }
]
function computerParts(shoppingCart) {
    let array = shoppingCart[1]
    let totalPrice = array.quantity * array.price
    return `${array.name} and ${array.quantity} and ${totalPrice}`
}
console.log(computerParts(shoppingCart));
