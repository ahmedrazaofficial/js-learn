//13.
const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Mouse Pad"];
const searchTerm = "Mouse";

let final = 0
for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if (element == searchTerm) {
        console.log(element);
        final = final + 1
    }
}
console.log(final);
