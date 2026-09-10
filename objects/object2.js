// const tinderUser=new Object(),   
const tinderUser = {}     //same method
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.naam = "ahmed"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "ahmedrazagmail.com",
    fullname: {
        userName: {
            firstname: "ahmed",
            lastName: "raza"
        }
    }
}
console.log(regularUser.fullname.userName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4={obj1,obj2,obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)  //perameter isliya lagya kyuka sare valus 1 jo lekha hota ha oss me ajate ha
// console.log(obj4);
const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4);

const user = [
    {
        id: 1,
        email: "ahmed@gmail.com"
    },
    {
        id: 1,
        email: "ahmed@gmail.com"
    },
    {
        id: 1,
        email: "ahmed@gmail.com"
    },
]
console.log(user[1].email);
console.log(user[2].id);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(Object.hasOwn(tinderUser, 'isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: 999,
    courseinstrutor: "ahmed"
}
// course.courseinstrutor
const { courseinstrutor: instructure } = course
// console.log(courseinstrutor);
console.log(instructure);

// {
//     "name":"ahmed",
// "coursename":"js in hindi",
// "price":"free"
// }        //json method

[
    {},
    {},
    {}
]