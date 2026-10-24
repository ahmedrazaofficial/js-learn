//9.
function calculateTax(price, tax) {
    let taxAmount = price * tax / 100;
    return price + taxAmount;
}
console.log(calculateTax(10000, 15));
