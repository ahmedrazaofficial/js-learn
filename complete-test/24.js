const products = [
    { name: "Laptop", price: 100000, category: "electronics" },
    { name: "Chair", price: 8000, category: "furniture" },
    { name: "Phone", price: 50000, category: "electronics" },
    { name: "Desk", price: 15000, category: "furniture" }
];
let discount = products.map((item) => {
    let finalPrice;
    if (item.category === "electronics") {
        let discount = item.price * 10 / 100
        finalPrice = item.price - discount
    } else if (item.category === "furniture") {
        let discount = item.price * 5 / 100
        finalPrice = item.price - discount
    }
    return {
        ...item, finalPrice: finalPrice
    }


})
console.log(discount);

let check = discount.filter((item) => item.finalPrice > 10000); console.log(check);