//14.
const product = {
    name: "Laptop",
    price: 120000,
    brand: "Dell",
    stock: 5
}
for (const key in product) {
    console.log(`${key} : ${product[key]}`);
}