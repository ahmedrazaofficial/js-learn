const products = [
    { name: "Keyboard", stock: 10, price: 3000 },
    { name: "Mouse", stock: 0, price: 1500 },
    { name: "Monitor", stock: 5, price: 25000 },
    { name: "USB", stock: 2, price: 1000 }
];
let outOfStock = products.filter((item) => item.stock == 0)
console.log(outOfStock);
let availabale = products.filter((item) => item.stock > 0)
console.log(availabale);
let totalPrice = products.reduce((acc, stockPrice) => acc + (stockPrice.stock * stockPrice.price), 0)
console.log(totalPrice);