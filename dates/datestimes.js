///////////////DATES///////////////

let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let myDate = new Date(2026, 0, 27)  //iss me month 0 se count hota ha
console.log(myDate.toDateString());
let newDate = new Date(2023, 3, 2, 3, 39)
console.log(newDate.toLocaleString());
let lastDate = new Date("2025-01-23")  //yy-mm-dd iss me month 1 se count hota ha
console.log(lastDate.toLocaleString());
let newsDate = new Date("05-14-2009")  //mm-dd-yy
console.log(newsDate.toLocaleString());


///////////////TIMES////////////////


let myTimeStamp = Date.now()
console.log(myTimeStamp);
let pracDate = new Date()
console.log(pracDate);
console.log(pracDate.getTime());  // comparison hmasha milisecond me krna
console.log(Math.floor(Date.now() / 1000)); // mili sec me karna ka liya 1000 se divide karo lakin yah karna
//  se decimal me value ati ha  decimal ko rempve karna ka liya floor lagaya //
console.log(pracDate.getDate());
console.log(pracDate.getMonth() + 1);
console.log(pracDate.getDay());

console.log(`${pracDate.getMonth()} and the time is dash`);

console.log(pracDate.toLocaleString('default', {
    weekday: "long",
})
);



let ms = 100000000
console.log(ms / 1000 / 60 / 60 / 24 / 30 / 12);

let decade = 5
console.log(decade * 10 * 12 * 30 * 24 * 60 * 60 * 1000);


