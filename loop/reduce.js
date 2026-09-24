const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currentvalue) {
    console.log(`acc: ${acc} and currentvalue : ${currentvalue}`);
    return acc + currentvalue
}, 0)
console.log(myTotal);


/*  ***************  this is called arrow function method   ******************  */
const myTotalnum = myNums.reduce((acc, currentvalue) => acc + currentvalue, 0)
console.log(myTotalnum);

const shoppingCarts = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let final = shoppingCarts.reduce((acc, item) => acc + item.price, 0)
console.log(final);
