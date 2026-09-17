const user = {
    username: "ahmed",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        console.log(this);

    }
}
user.welcomeMessage()
user.username = "anas"
user.welcomeMessage()
console.log(this);  // empty object ={}

function thisUse() {
    username: "ahmed"
    console.log(this.username);  //boht sare value dedeta ha agr function ka ander this use karega
    //function ka ander koi bhi value this ka zarya acces nhi hoge yah object me hoti ha function me nhi hoti
}
thisUse()

//////////////////////////////    ARROW FUNCTIONS METHOD    ///////////////////////////////////////

const arrowfunction = () => {
    username: "ahmed"
    console.log(this.username);
}
arrowfunction()

const addThreeNumber = (num1, num2, num3) => {
    return num1 + num2 + num3
}
console.log(addThreeNumber(2, 3, 4));



const addTwoNumber = (num1, num2) => (num1 + num2) // const addTwoNumber = (num1, num2) => num1 + num2
//jab ap curly bracket me lekhta ho toh return lekhna hota ha agr ap (num1, num2) => (num1 + num2) esa arrow ka bad
//  plus jo ha oss ko bracket me lekhoga toh apku return nhi lekhna hoga or agr object ko bhi return karna hoga toh oss 
//    ko bhi () iss me rakh kar karega

console.log(addTwoNumber(5, 5));

