const shoppingCart = [
    {
        name: "shirt",
        price: 999,
        quantity: 2
    },
    {
        name: "pent",
        price: 799,
        quantity: 3
    },
    {
        name: "shoes",
        price: 499,
        quantity: 4
    },
]
function calculation(shoppingCart) {
    let totalPrice = (shoppingCart[0].price * shoppingCart[0].quantity + shoppingCart[1].price * shoppingCart[1].quantity + shoppingCart[2].price * shoppingCart[2].quantity)
    return totalPrice
}
console.log(calculation(shoppingCart));
