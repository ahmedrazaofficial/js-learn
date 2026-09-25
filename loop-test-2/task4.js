const cart = [
    { item: "Keyboard", price: 3000 },
    { item: "Mouse", price: 1500 },
    { item: "Headphones", price: 5000 }
]
let final = cart.reduce(function (acc, currentvalue) {
    // console.log(`acc: ${acc} and currentvalue : ${currentvalue}`);
    return acc + currentvalue.price
}, 0)
console.log(final);
