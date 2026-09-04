let product = "Laptop";
console.log(product, typeof product);

let price = "85000";
let finalPrice = Number(price)
console.log(finalPrice, typeof finalPrice);

let quantity = "2";
let finalQuantity = Number(quantity)
console.log(finalQuantity, typeof finalQuantity);

let available = "true";
let convert = Boolean(available)
console.log(convert, typeof convert);

let categories = ["Electronics", "Computers", "Gaming"];
console.log(categories[1]);
console.log(categories.length);
console.log(categories, typeof categories);

let createdAt = new Date("2026-09-04");
console.log(createdAt.toDateString());
console.log(createdAt.getFullYear());

console.log(finalPrice * finalQuantity);

