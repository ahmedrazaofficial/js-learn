///  if  /////
const tempreature = 40


if (tempreature === 40) {
    console.log("less than 40");
} else {
    console.log("greater than 41");
}   // yah toh if ka ander wala log ayega yah else ka ander wala dono me sa koi 1 ayega


//      >  greater than
//      <  less than
//      >= greater than equal yah toh value bare ha yah braber ha
//      >= less than equal yah toh value choti ha yah braber ha
//      ==  equal check dono braber ha
//      !=  not equal dono value equal nhi ha
//      ===  strick equal data type bhi check karega
//      !== negative check mtlb yah dono same data type ka nhi ha


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}

const balance = 1000

if (balance > 500) console.log("test");  // curly braces ka bagair bhi ho jata ha

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}   //    &&  and hota ha yah 1 bhi value false hoye toh kam nhi karega


if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("user logged in");
} //   || or hota ha yah koi 1 value bhi true ho toh kam karega