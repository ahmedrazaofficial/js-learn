const userEmail = "ahmedraza@gmail.com"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}


const emptyString = ""

if (emptyString) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}


const emptyArray = []

if (emptyArray) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

///////////////////////////////      FALSY VALUES      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//        yah sare values ko false mana jata ha
//      false  ,   0   ,  -0   ,  BigInt 0n   ,   ""  ,  null  ,  undefined  ,  NaN   

//////////////////////////       TRUTHY VALUES       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//  string ka ander kuch bhi ajaye woh truthy khalayega falsy value ka ilawah jo bhi ha woh truthy ha
//  "0"   ,  "false"   ,  " "  ,  []  ,  {}   ,   function(){} 

if (emptyArray.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

///////////////////   Nullish coalescing operator  (??):   null  ,  undefined  \\\\\\\\\\\\\\\\\\\\

let val1;
// val1 = 5 ?? 10
// val1=null ?? 10
// val1=undefined ??15
// val1 = null ?? 10 ?? 20
val1 = undefined ?? 30 ?? 40

console.log(val1);


///////////////////////////////     terniary  operator  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const iceTeaPrice = 100

//    condition ?  true : false

iceTeaPrice <= 80 ? console.log("less than equal") : console.log("more than 80");