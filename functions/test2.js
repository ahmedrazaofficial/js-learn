//1.
function multipleNumbers(...nums) {
    return nums
}
console.log(multipleNumbers(10, 20, 30, 40));

//2.
const functionConnect = {
    username: "Ahmed",
    price: 500
}
function objecttry(otheroObject) {
    return `${otheroObject.username} purchased the prodect for ${otheroObject.price}`;
}
let msg = objecttry(functionConnect)
console.log(msg);


//3.
function directObject(differentObject) {
    console.log(`my name is ${differentObject.name} and i am ${differentObject.age} year old`);

}
directObject({
    name: "ahmed",
    age: 17
})


//4.
const newArray = [10, 20, 30, 40, 50]
function arrayValues(array) {
    return array[1]
}
console.log(arrayValues(newArray));


//5.
function arrayConnect(array = [10, 20, 30, 40, 50]) {
    return array[2]
}
console.log(arrayConnect())
console.log(arrayConnect([30, 40, 50]));