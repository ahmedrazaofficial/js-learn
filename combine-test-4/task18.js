let obj = {
    name: "ahmed",
    price: 999,
    isAvailable: true
}
function calculation(obj) {
    if (obj.isAvailable && obj.price < 5000) {
        console.log("Product can be purchased");
    } else {
        console.log("Product can not be purchased");

    }
}
calculation(obj)