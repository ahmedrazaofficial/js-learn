//9.
let array = [
    {
        product: "dove",
        price: 400,
        quantity: 2

    },
    {
        product: "pamolive",
        price: 300,
        quantity: 4

    },
    {
        product: "tibet",
        price: 200,
        quantity: 6

    }
]
function calculation() {
    let totalprice = array[1]
    return totalprice.price * totalprice.quantity
}
console.log(calculation());

