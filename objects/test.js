const myIntro = {
    name: "ahmedraza",
    age: 17,
    city: "karachi",
    email: "ahmedrazagmail.com",
    "full name": "syed ahmed raza"
}
console.log(myIntro.name);
console.log(myIntro.email);
console.log(myIntro["full name"]);

myIntro.age = 19
console.log(myIntro.age);

const symbolkey = "secret"
const obj = {
    name: "anas raza",
    lastLoginDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    [symbolkey]: "secret"
}


console.log(obj.lastLoginDays[1]);
console.log(obj[symbolkey]);


const obj2 = {
    name: "ahmed",
    class: 11,
    college: "pechs"
}
Object.freeze(obj2)
obj2.name = "anas"
console.log(obj2);

const obj3 = {
    name: "ahmed",
    age: 17,
    greeting: function () {
        console.log("hello");

    }
}
console.log(obj3.greeting());



const obj5 = {
    name: "ahmed",
    email: "ahmed@gmail.com",
    age: 17,
    city: "karachi"
}

console.log(obj5.name);
console.log(obj5["email"]);


const obj6 = {
    name: "ahmed",
    email: "ahmed@gmail.com",
    age: 17,
    isLoggedIn: false,
    greeting: function () {
        console.log(`my name is ${this.name} and my email id is ${this.email}`);

    }
}
obj6.greeting()
