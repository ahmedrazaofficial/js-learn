// console.log("a");
// console.log("h");
// console.log("m");
// console.log("e");
// console.log("d");

function myName() {
    console.log("a");
    console.log("h");
    console.log("m");
    console.log("e");
    console.log("d");
}
myName  //this is called reference
myName() //this is called exicute

// function addTwoNumber(number1,number2){
// console.log(number1+number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2   //dono same kam karega
    console.log("ahmed");  //return ka bad kuch bhi kam nhi karega not printed
}


const result = addTwoNumber(5, 4)
// addTwoNumber(5,"11")
// addTwoNumber(5,null)
// addTwoNumber(5,"a")

console.log("result", result);

function loginUserMessage(username = "ibrahim") {
    if (!username) {

        //  ! yah true ko false or false ko true me convert krdeta ha
        // "" empty string ko man liya jata ha false value ha
        // undefined ko man liya jata ha false value ha

        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage(""))   
// console.log(loginUserMessage())  //jab koi value pass nhi karoga toh undefined ayega 