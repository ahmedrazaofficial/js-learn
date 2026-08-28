// 1.
console.log(new Date().toLocaleString());

// 2.
console.log(new Date().getFullYear());


// 3.
console.log(new Date().getMonth() + 1);

// 4.
console.log(new Date().getDate());

// 5.
console.log(new Date().getDay());

//6.
let date = "2026-12-25"
console.log(new Date(date).getDate());
console.log(new Date(date).getMonth() + 1);
console.log(new Date(date).getFullYear());

//7.
let dob = "2009-09-15"
console.log(new Date(dob).getFullYear());

//8.
let newDate = new Date("2026-01-01");
let today = new Date();
console.log(today.getTime() > newDate.getTime());

//9.
console.log(new Date(today.setDate(today.getDate() + 7)).toDateString());


10.
console.log(new Date(today.setDate(today.getDate() - 30)).toDateString());






//11.
const day = "thursday"
const time = "8:30pm"
console.log(`today is ${day} the time is ${time}`);







