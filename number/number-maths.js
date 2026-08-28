const score = 400
console.log(score);

const balance = new Number(1020)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));  //yah decimal ka bad wale number ka liya use hota ha example 23.33232=>23.331

const val = 8929.24738
console.log(val.toPrecision(3));
// // 9 x 1000
// // 9000

// // 8.93e+3
// // 8.93 x 10^3
// // 8.93 x 1000
// // 8930


const otherNumber = 2033332
console.log(otherNumber.toLocaleString('en-pk'));  //yah comma laga deta ha


console.log(Math);
console.log(Math.abs(-4));  //yah value ko positive krdeta ha
console.log(Math.round(4.4)); //roundoff krdeta ha
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));  //ceil yah bara he choose karega
console.log(Math.floor(4.9));  // floor hamasha kam value choose karega
console.log(Math.min(3, 4, 5, 2, 6, 7, 8));
console.log(Math.max(3, 4, 5, 2, 6, 7, 8));
console.log(Math.ceil(Math.random() * 6));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1) + min);




